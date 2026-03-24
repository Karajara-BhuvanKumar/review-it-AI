const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const OpenAI = require('openai');
const fs = require('fs');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

// Initialize OpenAI with your API key
// IMPORTANT: Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key.
// You can get one from https://platform.openai.com/account/api-keys
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // It's best practice to use environment variables
});

// Enable CORS for all origins
// In a production environment, you should restrict this to your frontend's domain
app.use(cors());

// Serve static files from the frontend build directory
app.use(express.static('d:/Projects/Minor Project/academia-ace-tool/dist'));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});
const upload = multer({ storage: storage });

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint for analyzing research papers
app.post('/analyze', upload.single('pdfFile'), async (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No PDF file uploaded.' });
  }

  const pdfPath = req.file.path; // Path to the uploaded PDF file

  try {
    // Read the PDF file
    const dataBuffer = fs.readFileSync(pdfPath);

    // Extract text from PDF
    const data = await pdf(dataBuffer);
    const paperText = data.text;

    // --- OpenAI API Integration ---
    // This is where the magic happens! We send the extracted text to OpenAI.

    // Example OpenAI prompt to analyze the research paper
    // This prompt asks for a summary, keywords, and suitable journals/conferences.
    const prompt = `Analyze the following research paper text and provide:
    1. A concise summary of the paper (around 150-200 words).
    2. 5-7 relevant keywords.
    3. 5 suitable academic journals (with reasons for suitability).
    4. 5 suitable academic conferences (with reasons for suitability).

    Research Paper Text:
    """
    ${paperText}
    """
    `;

    // Call OpenAI's chat completion API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can use other models like "gpt-4" for better results
      messages: [{ role: "user", content: prompt }],
    });

    const analysisResult = completion.choices[0].message.content;

    // Parse the analysis result from OpenAI
    // This is a simple parsing, you might need more robust parsing depending on OpenAI's output format
    const summaryMatch = analysisResult.match(/1\. A concise summary of the paper:?\s*([\s\S]*?)\n2\./);
    const keywordsMatch = analysisResult.match(/2\. \d-?\d? relevant keywords:?\s*([\s\S]*?)\n3\./);
    const journalsMatch = analysisResult.match(/3\. \d suitable academic journals:?\s*([\s\S]*?)\n4\./);
    const conferencesMatch = analysisResult.match(/4\. \d suitable academic conferences:?\s*([\s\S]*)/);

    const summary = summaryMatch ? summaryMatch[1].trim() : 'Could not extract summary.';
    const keywords = keywordsMatch ? keywordsMatch[1].trim().split(',').map(kw => kw.trim()) : ['Could not extract keywords.'];
    const journals = journalsMatch ? journalsMatch[1].trim().split('\n').filter(line => line.trim() !== '') : ['Could not extract journals.'];
    const conferences = conferencesMatch ? conferencesMatch[1].trim().split('\n').filter(line => line.trim() !== '') : ['Could not extract conferences.'];

    // Send the structured results back to the frontend
    res.json({
      summary,
      keywords,
      journals,
      conferences
    });

  } catch (error) {
    console.error('Error analyzing PDF:', error);
    res.status(500).json({ error: 'Failed to analyze PDF.', details: error.message });
  } finally {
    // Clean up the uploaded PDF file
    fs.unlink(pdfPath, (err) => {
      if (err) console.error('Error deleting uploaded PDF:', err);
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
