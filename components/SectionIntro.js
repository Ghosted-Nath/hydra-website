export default function SectionIntro({ kicker, title, body, centered = false }) {
  return (
    <div className={`section-intro ${centered ? "centered" : ""}`}>
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
