import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Video directly layered */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0
      }}>
   {/* Background Video using Streamable iframe */}
<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }}
>
  <iframe
    src="https://streamable.com/e/6xpb41?autoplay=1&muted=1&loop=1"
    allow="autoplay; fullscreen"
    allowFullScreen
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      border: "none",
      pointerEvents: "none" // makes it behave like background
    }}
  />
</div>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}></div>
      </div>

      <div className="container relative z-10 text-center" style={{ zIndex: 1, color: 'white', maxWidth: '800px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md-text-6xl"
          style={{ marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}
        >
          Smarter Mobility for <br /> <span style={{ color: 'var(--color-primary-light)' }}>Akwa Ibom</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-gray-soft"
          style={{ marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}
        >
          Reliable, Safe, and Connected Transportation Powered by Technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md-flex-row items-center justify-center gap-4"
        >
          <style>{`
            @media (min-width: 768px) {
              .md-flex-row { flex-direction: row !important; }
              .md-text-6xl { font-size: 4rem !important; }
            }
          `}</style>
          <button className="btn btn-primary" style={{ width: '200px' }}>Get Started</button>
          <button className="btn btn-glass" style={{ width: '200px' }}>Learn More</button>
        </motion.div>
      </div>
    </div>
  );
}
