import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MainLayout from '../components/layouts/MainLayout';
import Button from '../components/ui/Button';

const Questionnaire = () => {
  const router = useRouter();
  const [ageRange, setAgeRange] = useState('');
  const [skinType, setSkinType] = useState('');
  const [allergies, setAllergies] = useState('');
  const [acneFrequency, setAcneFrequency] = useState('');
  const [wrinkleConcerns, setWrinkleConcerns] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/questionnaire/', {
        age_range: ageRange,
        skin_type: skinType,
        allergies,
        acne_frequency: acneFrequency,
        wrinkle_concerns: wrinkleConcerns,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      router.push('/get-started'); // Redirect to the Get Started page
    } catch (error) {
      console.error('Failed to submit questionnaire:', error);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">QUESTIONS</h2>
          <div>
            <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">Age Range</label>
            <select
              id="ageRange"
              name="ageRange"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            >
              <option value="">Select Age Range</option>
              <option value="Under 18">Under 18</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="65 and above">65 and above</option>
            </select>
          </div>

          <div>
            <label htmlFor="skinType" className="block text-sm font-medium text-gray-700">Skin Type</label>
            <select
              id="skinType"
              name="skinType"
              value={skinType}
              onChange={(e) => setSkinType(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            >
              <option value="">Select Skin Type</option>
              <option value="Oily">Oily</option>
              <option value="Combination">Combination</option>
              <option value="Dry">Dry</option>
              <option value="Normal">Normal</option>
              <option value="Sensitive">Sensitive</option>
            </select>
          </div>

          <div>
            <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="acneFrequency" className="block text-sm font-medium text-gray-700">Acne Frequency</label>
            <select
              id="acneFrequency"
              name="acneFrequency"
              value={acneFrequency}
              onChange={(e) => setAcneFrequency(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            >
              <option value="">Select Acne Frequency</option>
              <option value="Rarely">Rarely</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Frequently">Frequently</option>
              <option value="Always">Always</option>
            </select>
          </div>

          <div>
            <label htmlFor="wrinkleConcerns" className="block text-sm font-medium text-gray-700">Wrinkle Concerns</label>
            <select
              id="wrinkleConcerns"
              name="wrinkleConcerns"
              value={wrinkleConcerns}
              onChange={(e) => setWrinkleConcerns(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            >
              <option value="">Select Wrinkle Concerns</option>
              <option value="Minimal">Minimal</option>
              <option value="Moderate">Moderate</option>
              <option value="Significant">Significant</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Questionnaire;
