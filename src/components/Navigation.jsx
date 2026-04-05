import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 0',
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent'
    }}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={scrolled ? "var(--color-primary)" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"></circle>
             <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
             <path d="M7.5 8 10 10l2-2 2 2 2.5-2"></path>
           </svg>
           <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: scrolled ? 'var(--color-text-main)' : 'white' }}>
             Akwa Connect
           </h1>
        </div>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="hidden md-flex gap-8 items-center">
          <style>{`
            @media (min-width: 768px) {
              .hidden.md-flex { display: flex !important; }
            }
            .nav-link { font-weight: 500; cursor: pointer; transition: color var(--transition-fast); }
            .nav-link:hover { color: var(--color-primary); }
            .scrolled-nav { color: var(--color-text-main); }
            .top-nav { color: white; }
          `}</style>
          <a className={`nav-link ${scrolled ? 'scrolled-nav' : 'top-nav'}`} href="#what">About</a>
          <a className={`nav-link ${scrolled ? 'scrolled-nav' : 'top-nav'}`} href="#how">How it Works</a>
          <a className={`nav-link ${scrolled ? 'scrolled-nav' : 'top-nav'}`} href="#features">Features</a>
          <a className={`nav-link ${scrolled ? 'scrolled-nav' : 'top-nav'}`} href="#map">Coverage</a>
          <button className={`btn ${scrolled ? 'btn-primary' : 'btn-glass'}`}>Get Started</button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md-hidden" style={{ display: 'block' }}>
          <style>{`@media (min-width: 768px) { .md-hidden { display: none !important; } }`}</style>
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: scrolled ? 'var(--color-text-main)' : 'white' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
{/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '1.5rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <a href="#what" className="nav-link scrolled-nav" onClick={() => setIsOpen(false)}>About</a>
            <a href="#how" className="nav-link scrolled-nav" onClick={() => setIsOpen(false)}>How it Works</a>
            <a href="#features" className="nav-link scrolled-nav" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#map" className="nav-link scrolled-nav" onClick={() => setIsOpen(false)}>Coverage</a>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
