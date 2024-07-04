import Link from 'next/link';
import RadiationIcon from './RadiationIcon';

export default function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <RadiationIcon className="h-8 w-8" />
        <div>
          <h1 className="text-2xl font-bold">RadiantSkinAI</h1>
          <p className="text-sm">Smart Solutions for Radiant Skin</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
        <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
        <Link href="/contacts" className="text-sm font-medium hover:underline">Contacts</Link>
      </nav>
    </header>
  );
}
