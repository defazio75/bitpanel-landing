// src/components/Pricing.jsx
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
            <span className="text-4xl font-extrabold text-indigo-400 mb-4">$0</span>
            <ul className="text-gray-300 text-center mb-8 space-y-2">
              <li>✓ Unlimited paper trading</li>
              <li>✓ Access to dashboard & portfolio tracking</li>
              <li>✓ Community support</li>
              <li>✓ Try most bots in demo mode</li>
            </ul>
            <Link href="/signup">
              <button className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg">
                Start Free
              </button>
            </Link>
          </div>
          {/* Pro Plan */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow flex flex-col items-center border border-indigo-400">
            <h3 className="text-2xl font-semibold text-white mb-2">Pro (Early Adopter Pricing)</h3>
            <span className="text-4xl font-extrabold text-indigo-400 mb-4">$25 <span className="text-base font-normal text-gray-300">/month</span></span>
            <ul className="text-gray-300 text-center mb-8 space-y-2">
              <li>✓ Live trading on all supported exchanges</li>
              <li>✓ Full access to all advanced bots & AI strategies</li>
              <li>✓ Priority support</li>
              <li>✓ Early access to new features</li>
              <li>✓ Cancel anytime</li>
            </ul>
            <Link href="/signup">
              <button className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg">
                Start Free Trial
              </button>
            </Link>
            <span className="mt-3 text-xs text-gray-400">Special launch pricing — regular $49/mo</span>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-400">
          No credit card required for the free plan. Upgrade or cancel anytime.
        </p>
      </div>
    </section>
  );
}
