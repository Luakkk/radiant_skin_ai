import Navbar from '../components/Navbar';
import UploadPhoto from '../components/UploadPhoto';

export default function Upload() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <UploadPhoto />
            </main>
        </div>
    );
}
