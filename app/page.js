import AchievementsGrid from "../components/AchievementsGrid";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import PlayerCarousel from "../components/PlayerCarousel";
import ProgramsSection from "../components/ProgramsSection";
import SectionIntro from "../components/SectionIntro";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Page() {
  return (
    <main className="site-root">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />

      <section className="content-section" id="achievements">
        <SectionIntro
          kicker="Achievements"
          title="Achievements That Prove The Work"
          body="A growing record of wins, awards, and recognition that reflects consistent training, stronger engineering, and real competition impact."
        />
        <AchievementsGrid />
      </section>

      <GallerySection />

      <section className="content-section" id="team">
        <SectionIntro
          kicker="Team"
          title="Meet The Team Behind Hydrabotz"
          body="A tighter player spotlight layout keeps the visuals sharper, reduces wasted space, and stays more comfortable on mobile screens."
        />
        <PlayerCarousel />
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
