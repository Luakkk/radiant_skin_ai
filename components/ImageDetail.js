
// components/ImageDetail.js
import React from 'react';

export default function ImageDetail({ image, analysis }) {
    return (
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
    );
}
