import { motion } from 'framer-motion';

export default function AppExperience() {
  return (
    <section className="section-padding container" style={{ overflow: 'hidden' }}>
      <div className="flex flex-col md-flex-row items-center gap-12" style={{
        backgroundColor: 'var(--color-primary)',
        borderRadius: '32px',
        padding: '4rem',
        color: 'white',
        position: 'relative'
      }}>
        <style>{`
          .mobile-container { padding: 3rem 1.5rem; }
          @media(max-width: 768px) { .app-box { padding: 2rem !important; } }
        `}</style>

        <div className="md-w-1-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl"
            style={{ marginBottom: '1.5rem' }}
          >
            The City in Your Pocket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg"
            style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}
          >
            Track buses live, view ETAs, and top up your travel wallet all within our clean, lightning-fast mobile application designed for everyone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <button className="btn btn-secondary">Download for iOS</button>
            <button className="btn btn-glass">Get on Android</button>
          </motion.div>
        </div>

        <div className="md-w-1-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          {/* Using the generated isometric mockup image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            src="/images/app_mockup_1775383706620.png"
            alt="Akwa Connect Mobile Interface Mockup"
            className="floating"
            style={{
              maxWidth: '10000px',
              width: '130%',
              objectFit: 'contain',
              dropShadow: 'var(--shadow-float)',
              zIndex: 10
            }}
          />
        </div>
      </div>
    </section>
  );
}
