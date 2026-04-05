import { motion } from 'framer-motion';
import { Map, MapPin, Bus, Navigation, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Map size={24} />, title: "Check Route", desc: "View available buses and routes securely on your app." },
  { icon: <MapPin size={24} />, title: "Go to Stop", desc: "Head to the nearest designated smart bus stop." },
  { icon: <Bus size={24} />, title: "Board Bus", desc: "Scan and comfortably board a scheduled modern bus." },
  { icon: <Navigation size={24} />, title: "Travel Efficently", desc: "Experience air-conditioned, precise travel across the city." },
  { icon: <CheckCircle size={24} />, title: "Arrive on Time", desc: "Get to your destination without delays or stress." }
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="text-4xl" style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>How It Works</h2>
        <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--color-text-muted)' }}>
          Moving brilliantly across the city is literally as easy as 1-2-3.
        </p>
        
        <div className="flex flex-col md-flex-row justify-between items-center" style={{ gap: '2rem', position: 'relative' }}>
          <style>{`
            .line-connector {
               display: none; position: absolute; height: 2px; background: var(--color-border);
               top: 40px; left: 10%; right: 10%; z-index: 0;
            }
            @media(min-width: 768px) { .line-connector { display: block; } }
          `}</style>
          
          <div className="line-connector"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                zIndex: 1, maxWidth: '180px'
              }}
            >
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                backgroundColor: 'white', color: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem',
                border: '2px solid var(--color-gray-soft)'
              }}>
                {step.icon}
              </div>
              <h3 className="text-xl" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{step.title}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
