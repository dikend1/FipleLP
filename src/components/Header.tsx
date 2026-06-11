export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fiple home">
        <span className="brand-icon">F</span>
        <span>Fiple</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#how">How it works</a>
        <a href="#product">Product</a>
        <a href="#download">Download</a>
      </nav>
      <a className="nav-cta" href="#download">Join waitlist</a>
    </header>
  );
}
