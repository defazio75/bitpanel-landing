import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black bg-opacity-90 fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="text-2xl font-bold text-indigo-400">BitPanel NOVA</span>
      </Link>
      <div className="flex gap-6 items-center">
        <a href="#features" className="text-white hover:text-indigo-400">Features</a>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white hover:text-indigo-400 focus:outline-none"
          >
            More ▼
          </button>
          {dropdownOpen && (
            <div
              className="absolute bg-gray-900 rounded shadow-lg py-2 mt-2 w-48"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#testimonials" className="block px-4 py-2 text-white hover:bg-indigo-500">Testimonials</a>
              <a href="#security" className="block px-4 py-2 text-white hover:bg-indigo-500">Security</a>
              <a href="#exchanges" className="block px-4 py-2 text-white hover:bg-indigo-500">Exchanges</a>
              <a href="#currencies" className="block px-4 py-2 text-white hover:bg-indigo-500">Supported Coins</a>
              {/* Add more section scroll links here */}
            </div>
          )}
        </div>
        <a href="#pricing" className="text-white hover:text-indigo-400">Pricing</a>
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
