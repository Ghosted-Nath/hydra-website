import SectionIntro from "./SectionIntro";
import { gallery } from "./site-data";

export default function GallerySection() {
  return (
    <section className="content-section" id="gallery">
      <SectionIntro
        kicker="Gallery"
        title="Real Moments From The Workshop And Arena"
        body="A visual snapshot of training sessions, competition energy, student builds, and the hands-on environment behind Hydrabotz."
      />

      <div className="gallery-grid">
        {gallery.map((item) => (
          <figure key={item.title} className="gallery-card">
            <img src={item.src} alt={item.title} />
          </figure>
        ))}
      </div>
    </section>
  );
}
