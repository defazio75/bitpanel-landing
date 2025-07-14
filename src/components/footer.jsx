// src/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black text-gray-400 flex flex-col md:flex-row justify-between items-center px-8">
      <span>&copy; {new Date().getFullYear()} BitPanel NOVA. All rights reserved.</span>
      <div className="flex gap-6 mt-4 md:mt-0">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
    </footer>
  );
}
