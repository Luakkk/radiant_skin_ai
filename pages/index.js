import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/Button';
import CameraIcon from '../components/CameraIcon';
import UploadIcon from '../components/UploadIcon';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold text-center">Welcome to RadiantSkinAI</h1>
        <div className="flex gap-4">
          <Link href="/take-photo">
            <Button className="flex items-center gap-2">
              <CameraIcon className="h-6 w-6" />
              Take a Photo
            </Button>
          </Link>
          <Link href="/upload">
            <Button className="flex items-center gap-2">
              <UploadIcon className="h-6 w-6" />
              Upload a Photo
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
