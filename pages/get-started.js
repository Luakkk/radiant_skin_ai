import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Webcam from 'react-webcam';
import axios from 'axios';
import MainLayout from '../components/layouts/MainLayout';
import Button from '../components/ui/Button';
import CameraIcon from '../components/CameraIcon';
import UploadIcon from '../components/UploadIcon';

function base64ToBlob(base64, mime) {
  const byteString = atob(base64.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mime });
}

export default function Instructions() {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const [photo, setPhotoState] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const router = useRouter();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhotoState(imageSrc);
  };

  const uploadPhoto = async (photoToUpload) => {
    if (!photoToUpload) return;

    try {
      const mime = 'image/jpeg';
      const photoBlob = base64ToBlob(photoToUpload, mime);
      const formData = new FormData();
      formData.append('image', photoBlob, 'photo.jpg');

      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Upload successful!');
      router.push({
        pathname: '/results',
        query: { id: response.data.id },
      });
    } catch (error) {
      console.error(error);
      setUploadStatus('Upload failed.');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6 text-black">
        <h1 className="text-4xl font-bold mt-10">Instructions</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <p className="text-center mb-4">
            Follow these instructions to take or upload a photo for analysis:
          </p>
          <ol className="list-decimal list-inside text-left mb-8 text-lg">
            <li>Open the camera app and take a picture in a well-lit area, capturing only your face up to your shoulders.</li>
            <li>Choose an option below to analyze your skin using RadiantSkin AI.</li>
            <li>Wait for the upload to complete and see the results.</li>
          </ol>
          <div className="flex space-x-4 w-full">
            <div className="flex flex-col items-center space-y-4 w-1/2 p-4 border-r">
              <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="w-full rounded-lg shadow-md" />
              <Button className="flex items-center gap-2 mt-4" onClick={capture}>
                <CameraIcon className="h-6 w-6" />
                Capture Photo
              </Button>
              {photo && (
                <>
                  <img src={photo} alt="Captured" className="w-full h-auto rounded-lg shadow-md mt-4" />
                  <Button className="flex items-center gap-2" onClick={() => uploadPhoto(photo)}>
                    <UploadIcon className="h-6 w-6" />
                    Upload Photo
                  </Button>
                  <p>{uploadStatus}</p>
                </>
              )}
            </div>
            <div className="flex flex-col items-center space-y-4 w-1/2 p-4">
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
