import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatIsIt from './components/WhatIsIt';
import HowItWorks from './components/HowItWorks';
import AppExperience from './components/AppExperience';
import Features from './components/Features';
import SystemMap from './components/SystemMap';
import WhyItMatters from './components/WhyItMatters';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navigation />
      <Hero />
      <WhatIsIt />
      <HowItWorks />
      <AppExperience />
      <Features />
      <SystemMap />
      <WhyItMatters />
      <Footer />
    </div>
  );
}

export default App;
