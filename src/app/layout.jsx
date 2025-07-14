// src/app/layout.jsx
import './globals.css'; // <-- Tailwind or your global CSS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'BitPanel NOVA',
  description: 'The Best New Automated AI Crypto Trading Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <Navbar />
        <div className="pt-24"> {/* pushes content below sticky nav */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
