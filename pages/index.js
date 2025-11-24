import Head from 'next/head'
import Script from 'next/script'

export default function Home(){
  return (
    <>
      <Head>
        <title>Sagekosi — Portfolio</title>
        <meta name="description" content="Sagekosi — Creative Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="site-header">
        <nav className="nav container">
          <a className="logo" href="#">Sagekosi</a>
          <ul className="nav-links">
            <li><a href="#works">Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero container">
          <div className="hero-left">
            <h1 className="hero-title">Designing digital experiences that feel alive.</h1>
            <p className="hero-sub">I build branded interfaces, interactive sites, and creative tools. Explore selected works below — each piece blends code, motion, and craft.</p>
            <div className="hero-cta">
              <a className="btn" href="#works">See Works</a>
              <a className="btn ghost" href="#contact">Hire Me</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="blob" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main>
        <section id="works" className="section container">
          <h2 className="section-title">Selected Works</h2>
          <div className="filters" role="tablist" aria-label="Filter projects">
            <button data-filter="*" className="filter active">All</button>
            <button data-filter="web" className="filter">Web</button>
            <button data-filter="ui" className="filter">UI</button>
            <button data-filter="tooling" className="filter">Tooling</button>
          </div>
          <div id="projects" className="grid" aria-live="polite"></div>
        </section>

        <section id="about" className="section container">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="card glass">
              <h3>Who I am</h3>
              <p>I'm a creative developer focused on micro-interactions, expressive layouts, and performance-minded experiences. I design and implement websites and web tools with an eye for craft.</p>
            </div>
            <div className="card glass">
              <h3>Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Design Systems & UI Prototyping</li>
                <li>Animation & Motion UX</li>
                <li>Accessibility & Performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <form id="contactForm" className="card form" noValidate>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required />
              <div className="form-foot">
                <button type="submit" className="btn">Send Message</button>
                <div id="formStatus" className="status" aria-live="polite"></div>
              </div>
            </form>

            <div className="card glass contact-info">
              <h3>Say hello</h3>
              <p>I'm available for freelance and collaborations. You can also reach me on socials below.</p>
              <p className="contact-follow">Find me on social media — links are in the footer.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div>&copy; <span id="year"></span> Sagekosi</div>
        <div className="footer-socials" aria-label="Social links">
          <a className="footer-social" href="https://x.com/sagekosidesigns" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0-7.3 3v.33A12.13 12.13 0 0 1 3.15 4.6a4.2 4.2 0 0 0-.58 2.15 4.27 4.27 0 0 0 1.9 3.55 4.2 4.2 0 0 1-1.93-.54v.06a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.57 8.57 0 0 1 2 19.54 12.07 12.07 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 23 4.56a8.3 8.3 0 0 1-2.54.7z"/></svg>
          </a>
          <a className="footer-social" href="https://github.com/Sagekosi" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.05c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.09-.12-.3-.52-1.52.11-3.18 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.66.23 2.88.11 3.18.75.8 1.2 1.82 1.2 3.09 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.07.8 2.15v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>
        </div>
        <div className="smallprint">Built with care — single page, dark mode, minimal JS.</div>
      </footer>

      <Script src="/assets/script.js" strategy="afterInteractive" />
    </>
  )
}
