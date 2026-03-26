export default function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-grid">
        <article className="surface-card contact-card sponsor-card">
          <div className="micro-label">Sponsor Slot</div>
          <h2>Jersey Title Sponsors</h2>
          <p>
            Partner with Hydrabotz as our Jersey Title Sponsor and place your brand at the forefront of
            innovation and competition. Gain high-visibility exposure across robotics events, workshops,
            school programs, and digital platforms while aligning with a driven, future-focused team.
          </p>

          <div className="jersey-visual">
            <video className="jersey-video" src="/assets/jersey.mp4" autoPlay muted loop playsInline />
          </div>

          <div className="contact-actions">
            <a
              href="mailto:teamhydrabotz@gmail.com?subject=Hydrabotz%20Jersey%20Title%20Sponsor%20Inquiry"
              className="button-primary"
            >
              Contact Us
            </a>
          </div>
        </article>

        <article className="surface-card contact-card">
          <div className="micro-label">Contact Us</div>
          <h2>Programs And Other Details</h2>
          <p>
            Reach out for school programs, workshops, competitive coaching, collaborations, and general
            Hydrabotz inquiries.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <span>Address</span>
              <strong>Secunderabad, Hyderabad, Telangana</strong>
            </div>
            <a href="tel:+917569300635" className="contact-item">
              <span>Phone</span>
              <strong>+91 75693 00635</strong>
            </a>
            <a href="mailto:teamhydrabotz@gmail.com" className="contact-item">
              <span>Email</span>
              <strong>teamhydrabotz@gmail.com</strong>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
