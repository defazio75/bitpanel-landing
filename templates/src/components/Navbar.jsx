import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black bg-opacity-80 fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="text-2xl font-bold text-indigo-400">BitPanel NOVA</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/dashboard" className="text-white hover:text-indigo-400">Dashboard</Link>
        <div className="relative group">
          <button className="text-white hover:text-indigo-400">Features</button>
          <div className="absolute hidden group-hover:block bg-gray-900 mt-2 py-2 w-48 shadow-xl rounded">
            <Link href="/about" className="block px-4 py-2 text-white hover:bg-indigo-500">About</Link>
            <Link href="/security" className="block px-4 py-2 text-white hover:bg-indigo-500">Security</Link>
            <Link href="/faq" className="block px-4 py-2 text-white hover:bg-indigo-500">FAQ</Link>
          </div>
        </div>
        <Link href="/pricing" className="text-white hover:text-indigo-400">Pricing</Link>
        <Link href="/login" className="text-white hover:text-indigo-400">Login</Link>
        <Link href="/signup">
          <button className="ml-4 px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-700 transition">
            Start Free Trial
          </button>
        </Link>
      </div>
    </nav>
  );
}
