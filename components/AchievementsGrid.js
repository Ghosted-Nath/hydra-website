import { achievements } from "./site-data";

const icons = {
  trophy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8v3a4 4 0 0 0 3 3.87V12a7 7 0 0 1-5 6.71V21h3v1H7v-1h3v-2.29A7 7 0 0 1 5 12v-1.13A4 4 0 0 0 8 7V4Zm-2 3H3v1a4 4 0 0 0 3 3.87V7Zm15 0h-3v4.87A4 4 0 0 0 21 8V7Z" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h4l1 3 1-3h4l-3 7a6 6 0 1 1-4 0L7 2Zm5 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 9.5 7H4l4.5 3.3L6.7 16 12 12.7 17.3 16l-1.8-5.7L20 7h-5.5L12 2Zm-4 15h8v2H8v-2Zm-1 3h10v2H7v-2Z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6L3.27 9.35l6.03-.88L12 3Z" />
    </svg>
  )
};

export default function AchievementsGrid() {
  return (
    <div className="achievements-grid">
      {achievements.map((item) => (
        <article key={item.title} className="achievement-card">
          <div className="achievement-icon" aria-hidden="true">{icons[item.icon] || icons.trophy}</div>
          <h3>{item.title}</h3>
          <div className="achievement-sub">{item.sub}</div>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
