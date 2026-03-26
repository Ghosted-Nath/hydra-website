import SectionIntro from "./SectionIntro";
import { programs } from "./site-data";

const programIcons = {
  bot: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4h6v2h2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-1v2h-2v-2h-4v2H8v-2H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V4Zm-2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7Zm2 3h2v2H9v-2Zm4 0h2v2h-2v-2Z" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Zm-5 7.6V15c0 1.8 2.6 3 5 3s5-1.2 5-3v-3.4l-5 2.5-5-2.5Z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8v3a4 4 0 0 0 3 3.9V12a7 7 0 0 1-5 6.7V21h3v1H7v-1h3v-2.3A7 7 0 0 1 5 12v-1.1A4 4 0 0 0 8 7V4Zm-2 3H3v1a4 4 0 0 0 3 3.9V7Zm15 0h-3v4.9A4 4 0 0 0 21 8V7Z" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5.3a4 4 0 0 0 4.7 4.7l-8.4 8.4a2 2 0 1 1-2.8-2.8l8.4-8.4A4 4 0 0 0 14 5.3Z" />
    </svg>
  )
};

export default function ProgramsSection() {
  return (
    <section className="content-section" id="programs">
      <SectionIntro
        kicker="Programs"
        title="Our Programs"
        body="From beginner workshops to competitive robotics coaching, we offer comprehensive programs for every skill level."
      />

      <div className="program-grid">
        {programs.map((item) => (
          <article key={item.code} className="surface-card program-card">
            <div className="program-card-glow" />
            <div className="program-card-head">
              <div className="program-icon" aria-hidden="true">
                {programIcons[item.icon]}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
