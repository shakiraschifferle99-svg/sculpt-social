import Link from "next/link";
import AuthNav from "./AuthNav";

export default function Nav() {
  return (
    <header className="b2-topnav" aria-label="Main navigation">
      <div className="b2-topnav__start">
        <a href="#" className="search-pill b2-nav-link" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3-3" />
          </svg>
          Search
        </a>
      </div>
      <p className="b2-logo-wordmark b2-topnav__center">
        <Link href="/" style={{ textDecoration: "none", color: "inherit", letterSpacing: "inherit" }}>
          Sculpt
        </Link>
      </p>
      <ul className="b2-topnav__end">
        <li><a className="b2-nav-link" href="#about">About</a></li>
        <li><a className="b2-nav-link" href="#features">Features</a></li>
        <li><a className="b2-nav-link" href="#community">Community</a></li>
        <AuthNav />
      </ul>
    </header>
  );
}
