import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AnalysisResults {
    summary: string;
    keywords: string[];
    journals: string[];
    conferences: string[];
}

const ResultsPage: React.FC = () => {
    const [results, setResults] = useState<AnalysisResults | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedResults = sessionStorage.getItem('analysisResults');
        if (storedResults) {
            setResults(JSON.parse(storedResults));
        } else {
            // If no results, redirect to upload page
            navigate('/upload');
        }
    }, [navigate]);

    if (!results) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Loading Results...</h1>
                    <p className="text-gray-600">If you are not redirected, please upload a paper first.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-left">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Analysis Results</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Summary</h2>
                    <p className="text-gray-700 leading-relaxed">{results.summary}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Keywords</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {results.keywords.map((keyword, index) => (
                            <li key={index}>{keyword}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Suitable Journals</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {results.journals.map((journal, index) => (
                            <li key={index}>{journal}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Suitable Conferences</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {results.conferences.map((conference, index) => (
                            <li key={index}>{conference}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-center mt-8">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        onClick={() => navigate('/upload')}
                    >
                        Analyze Another Paper
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
