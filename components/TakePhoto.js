import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/Button';
import CameraIcon from '../components/CameraIcon';
import UploadIcon from '../components/UploadIcon';

// Utility function to convert base64 to Blob
function base64ToBlob(base64, mime) {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mime });
}

export default function TakePhoto() {
    const webcamRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const router = useRouter();

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPhoto(imageSrc);
    };

    const uploadPhoto = async () => {
        if (!photo) return;

        try {
            const mime = 'image/jpeg';
            const photoBlob = base64ToBlob(photo, mime);
            const formData = new FormData();
            formData.append('image', photoBlob, 'photo.jpg');

            const response = await axios.post('http://127.0.0.1:8000/apppp/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadStatus('Upload successful!');
            router.push({
                pathname: '/results',
                query: { id: response.data.id }
            });
        } catch (error) {
            console.error(error);
            setUploadStatus('Upload failed.');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            <Button className="flex items-center gap-2" onClick={capture}>
                <CameraIcon className="h-6 w-6" />
                Capture Photo
            </Button>
            {photo && (
                <div className="flex flex-col items-center space-y-2">
                    <img src={photo} alt="Captured" className="max-w-full h-auto rounded-lg shadow-md" />
                    <Button className="flex items-center gap-2" onClick={uploadPhoto}>
                        <UploadIcon className="h-6 w-6" />
                        Upload Photo
                    </Button>
                    <p>{uploadStatus}</p>
                </div>
            )}
        </div>
    );
}
