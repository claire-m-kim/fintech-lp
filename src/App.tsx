import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AppShowcase />
      <TrustSection />
      <Footer />
    </div>
  );
}
