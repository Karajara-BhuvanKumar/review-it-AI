import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud } from 'lucide-react'; // Assuming lucide-react is available

const UploadPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setError(null);
        }
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            if (file.type === 'application/pdf') {
                setSelectedFile(file);
                setError(null);
            } else {
                setError('Only PDF files are allowed.');
            }
        }
    }, []);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleAnalyze = async () => {
        if (!selectedFile) {
            setError('Please select a PDF file to upload.');
            return;
        }

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('pdfFile', selectedFile);

        try {
            // Make sure this URL matches your backend server's address
            const response = await fetch('http://localhost:3000/analyze', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.details || 'Failed to analyze paper.');
            }

            const data = await response.json();
            sessionStorage.setItem('analysisResults', JSON.stringify(data));
            navigate('/results');

        } catch (err: any) {
            console.error('Error during analysis:', err);
            setError('Error analyzing paper: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Upload Your Document</h1>
                <p className="text-gray-600 mb-6">
                    Research Paper | Research Proposal | Thesis | Presentation | CV
                </p>
                <p className="text-red-500 mb-6">Upload PDF file to proceed</p>

                <div
                    className={`border-2 border-dashed rounded-lg p-10 mb-6 transition-colors duration-200
                                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
                                flex flex-col items-center justify-center cursor-pointer`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('pdfFileInput')?.click()}
                >
                    <UploadCloud className="w-16 h-16 text-blue-500 mb-4" />
                    <p className="text-gray-700">Drag and drop your document here or</p>
                    <p className="text-blue-500">Click to browse and upload</p>
                    <input
                        type="file"
                        id="pdfFileInput"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>

                {selectedFile && (
                    <p className="text-gray-700 mb-4">Selected file: <span className="font-semibold">{selectedFile.name}</span></p>
                )}

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    onClick={handleAnalyze}
                    disabled={loading || !selectedFile}
                >
                    {loading ? 'Analyzing...' : 'Analyze Paper'}
                </button>

                {loading && <p className="text-blue-600 mt-4">Analyzing... Please wait.</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default UploadPage;
