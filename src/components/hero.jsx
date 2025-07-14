// src/components/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-[80vh] pt-12 pb-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800" id="hero">
      <div className="md:w-1/2 flex flex-col items-start gap-6">
        <h1 className="text-5xl font-extrabold text-white mb-2">
          Automate Your <span className="text-indigo-400">Crypto Trading</span> with AI
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Trade smarter, not harder. BitPanel NOVA works 24/7 to grow your portfolio using real bot strategies and next-gen automation.
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <button className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg shadow-lg">
              Start Free Trial
            </button>
          </Link>
          <Link href="/demo">
            <button className="px-8 py-3 rounded-xl border border-gray-300 bg-transparent text-gray-100 font-semibold text-lg hover:bg-gray-700 transition">
              Watch Demo
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src="/images/bitpanel-dashboard.png"
          alt="BitPanel NOVA Dashboard"
          width={600}
          height={340}
          className="rounded-2xl shadow-2xl border border-gray-700"
          priority
        />
      </div>
    </section>
  );
}
