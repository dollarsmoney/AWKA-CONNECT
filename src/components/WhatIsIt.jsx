import { motion } from 'framer-motion';

export default function WhatIsIt() {
  return (
    <section id="what" className="section-padding container">
      <div className="flex flex-col md-flex-row items-center gap-12">
        <style>{`@media (min-width: 768px) { .md-w-1-2 { width: 50% !important; } }`}</style>
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md-w-1-2"
        >
          <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>About Platform</h4>
          <h2 className="text-4xl" style={{ marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>
            What is Akwa Connect?
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Akwa Connect is a smart mobility platform that connects people to reliable transportation through structured routes, modern buses, and real-time digital systems.
          </p>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Our mission is to transform how Akwa Ibom moves, making daily commutes predictable, safe, and highly efficient.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md-w-1-2"
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, var(--color-primary-light) 0%, transparent 100%)',
            opacity: 0.1,
            borderRadius: '24px',
            transform: 'translate(-20px, 20px)',
            zIndex: -1
          }}></div>
          <img 
            src="/images/what_is_it_illustration_1775385473877.png" 
            alt="Smart Bus connected to digital tracking system" 
            style={{ borderRadius: '24px', boxShadow: 'var(--shadow-xl)', width: '100%' }} 
          />
        </motion.div>
      </div>
    </section>
  );
}
