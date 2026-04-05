import { motion } from 'framer-motion';

export default function SystemMap() {
  return (
    <section id="map" className="section-padding" style={{ backgroundColor: '#0f172a', color: 'white' }}>
      <div className="container flex flex-col md-flex-row items-center gap-12">
        <style>{`
          .map-pulsing-dot {
            width: 16px; height: 16px; background-color: var(--color-primary-light);
            border-radius: 50%; position: absolute;
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
            animation: pulse-ring 2s infinite cubic-bezier(0.66, 0, 0, 1);
          }
          @keyframes pulse-ring {
            100% { box-shadow: 0 0 0 20px rgba(74, 222, 128, 0); }
          }
        `}</style>
        
        <div className="md-w-1-2" style={{ order: 2 }}>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
            <img 
              src="/images/system_map_1775383855870.png" 
              alt="Akwa Connect Network Map" 
              style={{ width: '100%', display: 'block', borderRadius: '24px', opacity: 0.8 }} 
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md-w-1-2" 
          style={{ order: 1 }}
        >
          <h4 style={{ color: 'var(--color-primary-light)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>System Visualization</h4>
          <h2 className="text-4xl" style={{ marginBottom: '1.5rem', color: 'white' }}>
            Connecting the Heart of Akwa Ibom
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Our expansive network covers major hubs including Uyo, Ikot Ekpene, and Eket. Live synchronized routes ensure a seamless flow of movement across the state.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
             {[
               { city: 'Uyo', desc: 'Central Transit Hub & Metro Network' },
               { city: 'Ikot Ekpene', desc: 'Northern Logistics Interconnect' },
               { city: 'Eket', desc: 'Southern Trade Terminal' }
             ].map((node, i) => (
                <li key={i} className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                   <div className="map-pulsing-dot" style={{ position: 'relative', animationDelay: `${i * 0.5}s` }}></div>
                   <div>
                     <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{node.city}</h4>
                     <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>{node.desc}</p>
                   </div>
                </li>
             ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
