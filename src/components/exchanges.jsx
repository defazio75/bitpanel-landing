// src/components/Exchanges.jsx
import Image from 'next/image';

export default function Exchanges() {
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
