import { Link } from "react-router-dom";
import "./hero.css";
import heroBg from "../../assets/images/Purple Horizon Dunes.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../effects/Footer/Footer";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12.2c0 5.2 3.3 9.6 7.9 11.1.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.7 11.7 0 0 0 7.9-11.1A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export default function Hero({
  getStartedHref = "/docs/installation",
  githubHref = "https://github.com",
}) {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        {/* Navbar floats over the background */}
        <div className="hero__nav">
          <Navbar />
        </div>

        {/* Background image + readability overlay */}
        <div
          className="hero__bg"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        >
          <div className="hero__overlay" />
          <div className="hero__fade" />
        </div>

        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">
              <span className="tone-light">Create</span>{" "}
              <span className="tone-dark bold-font">Fast.</span>{" "}
              <span className="tone-light">Design</span>{" "}
              <span className="tone-dark bold-font">Bold.</span>
            </span>
            <span className="hero__line">
              <span className="tone-light">Animate</span>{" "}
              <span className="tone-dark bold-font">Without Limits.</span>
            </span>
          </h1>

          <p className="hero__subtitle">
            Breathe life into your website with beautifully designed animated
            components, a collection of stunning motion components designed to
            captivate.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to={getStartedHref}>
              Get Started <ArrowIcon />
            </Link>
            <a
              className="btn btn--light"
              href={githubHref}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> Github <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
