import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreviewSection from './components/AppPreviewSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base-100 grid-background" data-theme="ndttoolkit">
      <Navbar />
      <Hero />
      <AppPreviewSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
