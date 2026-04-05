import { motion } from 'framer-motion';

export default function WhyItMatters() {
  return (
    <section className="section-padding container">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 className="text-4xl" style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Why It Matters</h2>
      </div>

      <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {[
          { title: "Reduces Travel Stress", desc: "No more long unpredictable queues under the sun.",  },
          { title: "Improves Daily Movement", desc: "Enabling workers and students to commute effortlessly.", },
          { title: "Connects Key Areas", desc: "Bridging the gap between commercial and residential zones.", },
          { title: "Makes Transportation Predictable", desc: "Plan your day with confidence using our accurate schedules.", }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              padding: '2.5rem',
              backgroundImage: 'linear-gradient(to bottom right, var(--color-bg-alt), var(--color-gray-soft))',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
            }}
          >
            <h3 className="text-2xl" style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>{item.title}</h3>
            <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
