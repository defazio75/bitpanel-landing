import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import SecurityTrust from '../components/SecurityTrust';
import Exchanges from '../components/Exchanges';
import Currencies from '../components/Currencies';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <SecurityTrust />
        <Exchanges />
        <Currencies />
        {/* Add more sections as you want! */}
      </main>
      <Footer />
    </div>
  );
}
