const aboutCards = [
  {
    title: "Mission-Driven",
    body: "We're committed to making robotics education accessible to every student, preparing them for the tech-driven future."
  },
  {
    title: "Innovation First",
    body: "Our programs push boundaries, encouraging students to think creatively and solve complex engineering challenges."
  },
  {
    title: "Competitive Excellence",
    body: "We train championship-winning teams, fostering a culture of discipline, teamwork, and technical mastery."
  }
];

export default function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-intro surface-card">
        <div className="about-intro-copy">
          <div className="section-kicker">About</div>
          <h2>Hydrabotz Technologies</h2>
          <p>
            Hydrabotz Technologies is a Hyderabad-based STEM education and robotics training organization
            committed to transforming young minds into future innovators. We specialize in hands-on learning
            programs that bridge the gap between classroom theory and real-world engineering.
          </p>
        </div>
        <div className="about-estd">
          <span>ESTD.</span>
          <strong>OCT 2022</strong>
        </div>
      </div>

      <div className="about-grid">
        {aboutCards.map((item) => (
          <article key={item.title} className="surface-card about-card">
            <div className="micro-label">{item.title}</div>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
