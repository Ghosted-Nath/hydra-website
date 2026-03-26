import SectionIntro from "./SectionIntro";
import { gallery } from "./site-data";

export default function GallerySection() {
  return (
    <section className="content-section" id="gallery">
      <SectionIntro
        kicker="Gallery"
        title="Events & Gallery"
        body="Highlights from our workshops, competitions, and training programs."
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
