import Hero from './components/Hero';
import Features from './components/Features';
import UserScenarios from './components/UserScenarios';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Hero />
      <Features />
      <UserScenarios />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
