import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AnalysisResults = ({ analysis }) => {
  const parseAnalysis = (text) => {
    const sections = text.split('###').map(section => section.trim()).filter(section => section);
    return sections.map((section, index) => {
      const lines = section.split('\n').map(line => line.trim()).filter(line => line);
      const title = lines[0];
      const content = lines.slice(1).map((line, idx) => {
        if (line.startsWith('- ')) {
          return <li key={idx}>{line.slice(2)}</li>;
        } else if (line.match(/^\d+\. /)) {
          return <li key={idx}>{line}</li>;
        } else if (line.startsWith('#### ')) {
          return <p key={idx} className="font-semibold mt-2">{line.slice(5)}</p>;
        } else {
          return <p key={idx}>{line}</p>;
        }
      });

      return (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <ul className="list-disc list-inside">{content}</ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Image Analysis Result</h1>
      <h2 className="text-xl font-semibold mb-2">Acne Levels</h2>
      <ul className="list-disc list-inside">
        {analysis.acne.map((item, index) => (
          <li key={index}>
            {item.label}: {item.score.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2 mt-4">Wrinkle Levels</h2>
      <ul className="list-disc list-inside">
        {analysis.wrinkles.map((item, index) => (
          <li key={index}>
            {item.label}: {item.score.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="mt-4">{parseAnalysis(analysis.detailed_analysis)}</div>
    </div>
  );
};

export default function ImageDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get(`/api/image/${id}/`)
        .then(response => {
          setAnalysisResults(response.data.analysis_results);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching analysis results:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg">Loading data...</p>
            <div className="mt-4">
              <svg
                className="animate-spin h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!analysisResults) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg">Results not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <AnalysisResults analysis={analysisResults} />
        </div>
      </main>
    </div>
  );
}
