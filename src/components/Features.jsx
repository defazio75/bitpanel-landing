// src/components/Features.jsx
export default function Features() {
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
