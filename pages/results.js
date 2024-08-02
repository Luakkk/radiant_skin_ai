import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';
import axios from 'axios';

export default function Results() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/image/${id}/`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching image details:', error);
        });
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { image, analysis_results: analysis } = data;

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Image Analysis Result</h2>
        <img src={image} alt="Uploaded" className="w-full h-auto rounded-lg shadow-md" />
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Acne Levels:</h3>
            <ul className="list-disc list-inside ml-4">
              {analysis.acne.map((item, index) => (
                <li key={index} className="text-gray-600">{item.label}: {item.score.toFixed(2)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Wrinkle Levels:</h3>
            <ul className="list-disc list-inside ml-4">
              {analysis.wrinkles.map((item, index) => (
                <li key={index} className="text-gray-600">{item.label}: {item.score.toFixed(2)}</li>
              ))}
            </ul>
          </div>
          {analysis.detailed_analysis && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">Detailed Analysis:</h3>
              <p className="text-gray-600">{analysis.detailed_analysis}</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
