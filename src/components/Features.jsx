import { motion } from 'framer-motion';
import { Radio, Map, Route, ShieldCheck, Zap } from 'lucide-react';

const features = [
  { id: 1, icon: <Radio size={28} />, title: 'Real-time Tracking', desc: 'See exactly where your bus is and never guess wait times again.' },
  { id: 2, icon: <Route size={28} />, title: 'Smart Routes', desc: 'Data-driven intelligent routes optimized for fast transit.' },
  { id: 3, icon: <Zap size={28} />, title: 'Reliable Scheduling', desc: 'Punctuality you can count on, every minute of the day.' },
  { id: 4, icon: <ShieldCheck size={28} />, title: 'Safe Transportation', desc: 'A vetted, secure, and monitored transit environment.' }
];

export default function Features() {
  return (
    <section id="features" className="section-padding container">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 className="text-4xl" style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Core Features</h2>
        <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
          Built with cutting-edge technology that puts commuter convenience first.
        </p>
      </div>
      
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              transition: 'all var(--transition-fast)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--color-primary-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              backgroundColor: 'var(--color-gray-soft)', color: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {feature.icon}
            </div>
            <h3 className="text-xl" style={{ fontWeight: 600, marginBottom: '0.75rem' }}>{feature.title}</h3>
            <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
