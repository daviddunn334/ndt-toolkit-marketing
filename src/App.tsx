import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base-100" data-theme="ndttoolkit">
      <Navbar />
      <Hero />
      
      <Features />
      <Footer />
    </div>
  );
}

export default App;
