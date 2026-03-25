export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/assets/logo.jpeg" alt="Hydrabotz logo" className="footer-logo" />
        <div>
          <strong>Hydrabotz Technologies</strong>
          <span>&copy; {new Date().getFullYear()} Hydrabotz Technologies</span>
        </div>
      </div>

      <div className="footer-socials">
        <a href="https://www.instagram.com/hydra_botz/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.youtube.com/@HydraBotz" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://wa.me/917569300635" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}
