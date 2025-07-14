// src/components/Testimonials.jsx
export default function Testimonials() {
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
