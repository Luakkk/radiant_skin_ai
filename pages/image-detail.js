import Navbar from '../components/Navbar';
import ImageDetail from '../components/ImageDetail';
import { useRouter } from 'next/router';

export default function ImageDetailPage() {
  const router = useRouter();
  const { image, analysis } = router.query;

  // Ensure image and analysis are defined before rendering ImageDetail
  if (!image || !analysis) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading data...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <ImageDetail image={image} analysis={analysis} />
      </main>
    </div>
  );
}