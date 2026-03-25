import dynamic from "next/dynamic";

const HeroModelCanvas = dynamic(() => import("./HeroModelCanvas"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <h1>
          <span className="hero-line-primary">Building Future Innovators</span>
          <span className="hero-line-accent">Through Robotics &amp; Technology</span>
        </h1>
        <p>
          Empowering kids and students through hands-on robotics training, competitive coaching, and cutting-edge STEM education.
        </p>
        <div className="hero-actions">
          <a href="#team" className="button-primary">Meet The Team</a>
          <a href="#programs" className="button-ghost">Explore Programs</a>
        </div>
      </div>

      <div className="hero-stage">
        <div className="hero-rings" />
        <HeroModelCanvas />
      </div>
    </section>
  );
}
