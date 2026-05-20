export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero b2-bg-hero" aria-label="Hero">
        <p className="hero-eyebrow">For the Pilates instructor</p>
        <div className="hero-headline-wrap">
          <h1 className="b2-hero-headline">
            <span className="line-italic">Teach with</span>
            <span className="line-upright">intention.</span>
          </h1>
        </div>
        <p className="b2-hero-subline" style={{ maxWidth: "40ch", marginInline: "auto" }}>
          The AI-powered class planning app for busy Pilates instructors — you set the parameters, we build the plan, you stay in control.
        </p>
        <div className="hero-actions">
          <button type="button" className="b2-btn b2-btn-primary">Start for free</button>
          <button type="button" className="b2-btn b2-btn-ghost">See how it works</button>
        </div>
      </section>

      {/* ── For You ── */}
      <section className="section" id="about" aria-label="Who Sculpt is for">
        <div className="container">
          <p className="section-eyebrow">Made for you</p>
          <h2 className="section-title">
            <em>Built for</em> the instructor<br />who lives this work.
          </h2>
          <p className="section-body">
            Sculpt is designed for Pilates instructors who are short on time — whether you&apos;re teaching 40+ hours a week or fitting classes around a full-time job. You bring the passion and expertise. We handle the planning.
          </p>
          <div className="profile-strip" role="list">
            <div className="profile-item" role="listitem">
              <p className="profile-item-label">Who it&apos;s for</p>
              <p className="profile-item-value"><em>Full-time</em> &amp; side-hustle instructors</p>
            </div>
            <div className="profile-divider" aria-hidden="true" />
            <div className="profile-item" role="listitem">
              <p className="profile-item-label">Powered by</p>
              <p className="profile-item-value"><em>AI</em> + your choices</p>
            </div>
            <div className="profile-divider" aria-hidden="true" />
            <div className="profile-item" role="listitem">
              <p className="profile-item-label">Driven by</p>
              <p className="profile-item-value"><em>Movement</em> &amp; intention</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section b2-grain" id="features" style={{ background: "var(--b2-ivory)" }} aria-label="Features">
        <div className="container">
          <p className="section-eyebrow">What Sculpt gives you</p>
          <h2 className="section-title">
            Everything you need<br />to <em>grow your practice.</em>
          </h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 12h6M9 16h4" />
                </svg>
              </div>
              <h3>AI class planning</h3>
              <p>Set your parameters — equipment, muscle groups, mat or reformer, and class length — and get a complete, ready-to-teach plan in seconds. You stay in control.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Instructor community</h3>
              <p>Connect with other instructors, share ideas, and find support from people who get exactly what you do.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M9 7h6M9 11h6M9 15h4" />
                </svg>
              </div>
              <h3>Class plan library</h3>
              <p>Save and revisit your favourite plans. Build a personal library of classes you&apos;ve taught so nothing great gets lost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section b2-bg-hero" id="community" aria-label="What instructors say">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-eyebrow section-eyebrow--light">From the community</p>
          <h2 className="section-title section-title--light">
            Instructors who<br /><em>love what they do.</em>
          </h2>
          <div className="testimonials">
            <article className="testimonial b2-card">
              <blockquote>
                &ldquo;Sculpt made me feel like my teaching career actually had a home. The class planning tool alone saves me hours each week.&rdquo;
              </blockquote>
              <cite>Mia — Full-time instructor, London</cite>
            </article>
            <article className="testimonial b2-card">
              <blockquote>
                &ldquo;I was freelancing and felt scattered. Sculpt pulled everything together — bookings, clients, my brand. Now I feel like a professional.&rdquo;
              </blockquote>
              <cite>Ava — Side-hustle Pilates instructor</cite>
            </article>
            <article className="testimonial b2-card">
              <blockquote>
                &ldquo;The community is the best part. Finding other instructors who really understand the work has changed everything for me.&rdquo;
              </blockquote>
              <cite>Zoe — Newly certified, Sydney</cite>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-band" id="join" aria-label="Join Sculpt">
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: "center" }}>Start today</p>
          <h2 className="section-title" style={{ marginInline: "auto", textAlign: "center" }}>
            <em>Move</em> with intention.<br />Stay for the community.
          </h2>
          <p className="section-body" style={{ marginInline: "auto", textAlign: "center", marginBottom: "var(--b2-space-8)" }}>
            Join thousands of Pilates instructors — full time and side hustle — who&apos;ve reclaimed their planning time without losing control of their classes. Free to start, built to grow with you.
          </p>
          <div className="cta-actions">
            <button type="button" className="b2-btn b2-btn-primary">Create your profile</button>
            <button type="button" className="b2-btn b2-btn-secondary">Learn more</button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer" aria-label="Footer">
        <div className="container">
          <div className="footer-inner">
            <p className="b2-logo-wordmark">Sculpt</p>
            <ul className="footer-links">
              <li><a className="b2-nav-link" href="#about">About</a></li>
              <li><a className="b2-nav-link" href="#features">Features</a></li>
              <li><a className="b2-nav-link" href="#community">Community</a></li>
              <li><a className="b2-nav-link" href="#join">Join</a></li>
            </ul>
            <p className="footer-copy">&copy; 2026 Sculpt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
