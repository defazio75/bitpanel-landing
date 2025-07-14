// src/components/SecurityTrust.jsx
import Image from 'next/image';

export default function SecurityTrust() {
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
