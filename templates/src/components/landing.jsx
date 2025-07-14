'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// --- Navbar ---
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black bg-opacity-90 fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="text-2xl font-bold text-indigo-400">BitPanel NOVA</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="#features" className="text-white hover:text-indigo-400">Features</Link>
        <Link href="#security" className="text-white hover:text-indigo-400">Security</Link>
        <Link href="#testimonials" className="text-white hover:text-indigo-400">Testimonials</Link>
        <Link href="#exchanges" className="text-white hover:text-indigo-400">Exchanges</Link>
        <Link href="#currencies" className="text-white hover:text-indigo-400">Supported Coins</Link>
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

// --- Hero Section ---
function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-[80vh] pt-36 pb-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800">
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

// --- Features Section ---
function Features() {
  return (
    <section id="features" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white mb-2">AI-Driven Bots</h3>
            <p className="text-gray-300">Let powerful AI and proven algorithms trade for you—no coding required. Choose from prebuilt strategies or build your own.</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Exchange Support</h3>
            <p className="text-gray-300">Connect securely to Binance, Coinbase, Kraken, and more (with new integrations coming soon).</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white mb-2">True Portfolio Tracking</h3>
            <p className="text-gray-300">See real-time performance, growth, and history. Visualize every trade and every dollar, transparently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Testimonials Section ---
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-950 rounded-lg p-6 shadow">
            <p className="text-gray-200 mb-4">
              “BitPanel NOVA gave me control and confidence. My portfolio grew faster than ever with zero stress.”
            </p>
            <span className="text-gray-400 font-semibold">Alex M., Pro Trader</span>
          </div>
          <div className="bg-gray-950 rounded-lg p-6 shadow">
            <p className="text-gray-200 mb-4">
              “I love the real-time dashboard and AI automation. No more FOMO or emotional trading!”
            </p>
            <span className="text-gray-400 font-semibold">Samantha R., Crypto Enthusiast</span>
          </div>
          <div className="bg-gray-950 rounded-lg p-6 shadow">
            <p className="text-gray-200 mb-4">
              “The best new platform for automated crypto trading. Connected my Binance in minutes and started seeing results.”
            </p>
            <span className="text-gray-400 font-semibold">James K., Early Adopter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Security/Trust Section ---
function SecurityTrust() {
  return (
    <section id="security" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">Security & Trust</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image src="/images/security-icon.png" alt="Security" width={80} height={80} />
          <div>
            <ul className="text-gray-300 list-disc ml-6 space-y-2">
              <li>Bank-grade encryption protects your API keys and data</li>
              <li>We never touch your funds—only you can withdraw</li>
              <li>Trusted by traders worldwide (Binance, Coinbase, Kraken, and more)</li>
              <li>100% transparent performance—see every trade, every result</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Exchanges Section ---
function Exchanges() {
  return (
    <section id="exchanges" className="py-12 bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Supported Exchanges</h2>
        <div className="flex gap-10 items-center justify-center">
          <Image src="/images/exchange-binance.svg" alt="Binance" width={56} height={56} />
          <Image src="/images/exchange-coinbase.svg" alt="Coinbase" width={56} height={56} />
          <Image src="/images/exchange-kraken.svg" alt="Kraken" width={56} height={56} />
          <span className="text-gray-400 text-lg ml-6">More coming soon…</span>
        </div>
      </div>
    </section>
  );
}

// --- Supported Currencies Section ---
function Currencies() {
  return (
    <section id="currencies" className="py-12 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Supported Coins</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center text-lg text-gray-200">
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">BTC</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">ETH</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">SOL</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">DOT</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">XRP</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg shadow">LINK</span>
          <span className="text-gray-500 ml-6">More coming soon…</span>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
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

// --- Page Export ---
export default function LandingPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <SecurityTrust />
      <Exchanges />
      <Currencies />
      <Footer />
    </div>
  );
}
