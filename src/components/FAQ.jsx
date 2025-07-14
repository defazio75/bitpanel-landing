// src/components/FAQ.jsx
import { useState } from 'react';

const faqs = [
  {
    q: "Is BitPanel NOVA safe? Do you have access to my funds?",
    a: "Your funds always stay on your exchange. BitPanel only uses secure API keys (with withdrawal disabled) to automate trading. You can disconnect at any time.",
  },
  {
    q: "What exchanges do you support?",
    a: "We currently support Binance, Coinbase, and Kraken, with more integrations coming soon. You can connect one or multiple exchanges for maximum flexibility.",
  },
  {
    q: "Can I use BitPanel NOVA for free?",
    a: "Yes! The Starter plan includes unlimited paper trading and full dashboard access. Upgrade to Pro for live trading and advanced strategies.",
  },
  {
    q: "What coins can I trade?",
    a: "BTC, ETH, SOL, DOT, XRP, and LINK are supported on launch, with new coins being added regularly.",
  },
  {
    q: "How do I cancel or upgrade?",
    a: "You can upgrade, downgrade, or cancel your plan anytime from your account dashboard. No contracts or hidden fees.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No coding required! BitPanel NOVA is built for traders of all experience levels. Use prebuilt strategies or adjust settings with simple sliders.",
  },
  {
    q: "How is BitPanel NOVA different from other trading bots?",
    a: "We focus on transparency, performance tracking, and ease of use. Real AI features, real support, and a dashboard that gives you full control.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg px-6 py-4 cursor-pointer hover:bg-gray-800 transition"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">{item.q}</span>
                <span className="text-indigo-400 text-xl">{openIdx === idx ? "-" : "+"}</span>
              </div>
              {openIdx === idx && (
                <p className="mt-2 text-gray-300">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
