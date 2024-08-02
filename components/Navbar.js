import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 bg-white shadow-md hover:bg-gray-100 transition duration-300">
      <div className="flex items-center">
        <img src="/logo2.png" alt="RadiantSkinAI Logo" className="h-10" />
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold ml-2">RadiantSkin.AI</a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/" legacyBehavior>
          <a className="hover:underline">Home</a>
        </Link>
        <a href="#how-it-works" className="hover:underline">About</a>
        <a href="#footer" className="hover:underline">Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;
