// pages/results.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function Results() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/apppp/api/image/${id}/`)
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
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-bold">Image Analysis Result</h2>
                    <img src={image} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
                    <div className="space-y-2">
                        <p className="text-lg font-semibold">Acne Levels:</p>
                        {analysis.acne.map((item, index) => (
                            <p key={index}>{item.label}: {item.score}</p>
                        ))}
                        <p className="text-lg font-semibold">Wrinkle Levels:</p>
                        {analysis.wrinkles.map((item, index) => (
                            <p key={index}>{item.label}: {item.score}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
