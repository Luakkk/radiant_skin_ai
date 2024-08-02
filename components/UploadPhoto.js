import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Button from '../components/ui/Button';
import UploadIcon from '../components/UploadIcon';

export default function UploadPhoto() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const token = localStorage.getItem('token');  // Get token from localStorage
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`  // Include the token in the headers
        },
      });
      setUploadStatus('Upload successful!');
      router.push({
        pathname: '/results',
        query: { id: response.data.id },
      });
    } catch (error) {
      setUploadStatus('Upload failed.');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div
        className="w-full max-w-[300px] border-2 border-dashed border-muted rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <p>Click to upload</p>
      </div>
      {selectedFile && (
        <div className="flex flex-col items-center space-y-2">
          <p>Selected file: {selectedFile.name}</p>
          <Button className="flex items-center gap-2" onClick={handleUpload}>
            <UploadIcon className="h-6 w-6" />
            Upload Photo
          </Button>
          <p>{uploadStatus}</p>
        </div>
      )}
    </div>
  );
}
