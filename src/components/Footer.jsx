export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text-main)', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
         <div className="flex flex-col md-flex-row justify-between mb-12 border-border" style={{ gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            
            <div style={{ maxWidth: '300px' }}>
               <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"></circle>
                   <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                   <path d="M7.5 8 10 10l2-2 2 2 2.5-2"></path>
                 </svg>
                 <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Akwa Connect</h2>
               </div>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                 Reliable, safe, and connected transportation powered by modern technology, moving Akwa Ibom forward.
               </p>
            </div>

            <div className="flex gap-16">
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Platform</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>About Us</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>How it Works</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Support</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Help Center</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Contact</a></li>
                  <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>

         </div>

         <div className="flex justify-between items-center text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
           <p>© {new Date().getFullYear()} Akwa Connect. All rights reserved.</p>
           <p>Uyo, Akwa Ibom</p>
         </div>
      </div>
    </footer>
  );
}
