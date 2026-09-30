export default function Hero() {
  return (
    <section className="hero">
      <div className="page-container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Backend Engineer · Technical Founder · Product Builder
          </p>

          <h1>
            I build technology
            <br />
            that solves <span>real</span>
            <br />
            business problems.
          </h1>

          <p className="hero-description">
            I&apos;m Philip Ayoola — a backend developer and technical founder
            focused on building scalable products across commerce, logistics
            and financial technology.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore my work <span>↓</span>
            </a>

            <a href="#contact" className="text-button">
              Get in touch ↗
            </a>
          </div>

          <div className="availability">
            <span className="status-dot" />

            <div>
              <strong>Lagos, Nigeria</strong>
              <p>Available for remote &amp; international opportunities</p>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-window">
            <div className="window-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="window-title">philip.ts</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name:{" "}
                <span className="code-green">&quot;Philip Ayoola&quot;</span>,
              </p>

              <p className="indent">
                focus:{" "}
                <span className="code-green">&quot;Backend Systems&quot;</span>,
              </p>

              <p className="indent">
                builds: [
                <span className="code-green">&quot;MartFlex&quot;</span>,{" "}
                <span className="code-green">&quot;Settlevo&quot;</span>],
              </p>

              <p className="indent">
                stack: [
                <span className="code-green">&quot;Node.js&quot;</span>,{" "}
                <span className="code-green">&quot;PostgreSQL&quot;</span>],
              </p>

              <p>{"};"}</p>

              <br />

              <p className="code-comment">// Build things that matter.</p>

              <p>
                <span className="code-purple">export default</span> developer;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="tech-strip">
          <span>NODE.JS</span>
          <span>EXPRESS</span>
          <span>POSTGRESQL</span>
          <span>PRISMA</span>
          <span>REST APIs</span>
          <span>TYPESCRIPT</span>
          <span>GIT</span>
        </div>
      </div>
    </section>
  );
}
