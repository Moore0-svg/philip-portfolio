const links = [
  {
    number: "01",
    label: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/philip-a-9b230430a",
  },
  {
    number: "02",
    label: "GitHub",
    description: "Code & engineering",
    href: "https://github.com/Moore0-svg",
  },
  {
    number: "03",
    label: "MartFlex",
    description: "Commerce & logistics",
    href: "https://onelink.to/w4bm9t",
  },
  {
    number: "04",
    label: "Settlevo",
    description: "B2B collections",
    href: "https://settlevo.com/",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="final-contact">
        <div className="page-container">

          <div className="final-contact-top">
            <p className="section-label">05 / Contact</p>

            <div className="final-contact-status">
              <span />
              AVAILABLE FOR CONVERSATIONS
            </div>
          </div>

          <div className="final-contact-hero">
            <div className="final-contact-title">
              <h2>
                Let&apos;s build
                <br />
                something <span>useful.</span>
              </h2>
            </div>

            <div className="final-contact-right">
              <p>
                I&apos;m open to backend engineering opportunities,
                technical collaborations and conversations around
                ambitious products.
              </p>

              <a
                href="mailto:philipoayoola@gmail.com"
                className="final-email"
              >
                <div>
                  <small>EMAIL ME</small>
                  <strong>philipoayoola@gmail.com</strong>
                </div>

                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="final-contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="final-social-card"
              >
                <div className="final-social-top">
                  <span>{link.number}</span>
                  <span>↗</span>
                </div>

                <div>
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="final-contact-bottom">
            <div className="final-location">
              <span className="final-location-dot" />

              <div>
                <small>BASED IN</small>
                <strong>Lagos, Nigeria</strong>
              </div>
            </div>

            <div className="final-availability">
              <small>OPPORTUNITIES</small>
              <strong>Remote · International</strong>
            </div>
          </div>

        </div>
      </section>

      <footer className="final-footer">
        <div className="page-container final-footer-inner">

          <a href="#" className="final-footer-logo">
            PA<span>.</span>
          </a>

          <p>
            Backend Engineer · Technical Founder · Product Builder
          </p>

          <p>
            © {new Date().getFullYear()} Philip Ayoola
          </p>

          <a href="#" className="final-back-top">
            Back to top ↑
          </a>

        </div>
      </footer>
    </>
  );
}
