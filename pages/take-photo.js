import Navbar from '../components/Navbar';
import TakePhoto from '../components/TakePhoto';

export default function TakePhotoPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <TakePhoto />
            </main>
        </div>
    );
}
