import Navbar from '../components/Navbar';
import ImageDetail from '../components/ImageDetail';
import { useRouter } from 'next/router';

export default function ImageDetailPage() {
  const router = useRouter();
  const { image, analysis } = router.query;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <ImageDetail image={image} analysis={analysis} />
      </main>
    </div>
  );
}
