import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import PathSection from './components/PathSection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scrolling polyfill for better cross-browser support
    const smoothScrollTo = (element: Element) => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    // Add scroll behavior to hash links
    const handleHashLinks = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => smoothScrollTo(element), 100);
        }
      }
    };

    handleHashLinks();
    window.addEventListener('hashchange', handleHashLinks);

    return () => {
      window.removeEventListener('hashchange', handleHashLinks);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mission Section */}
        <MissionSection />
        
        {/* Path Section */}
        <PathSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Team Section */}
        <TeamSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}