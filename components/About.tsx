const disciplines = [
  {
    number: "01",
    title: "Engineering",
    text: "Backend systems, APIs, databases, authentication and integrations.",
  },
  {
    number: "02",
    title: "Product",
    text: "Turning real business problems into usable software products.",
  },
  {
    number: "03",
    title: "Operations",
    text: "Understanding what happens when software meets customers and the real world.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="page-container">
        <div className="about-layout">

          <div className="about-heading">
            <p className="section-label">03 / About Philip</p>

            <h2>
              I&apos;m interested in the space between{" "}
              <span>technology, products and business.</span>
            </h2>
          </div>

          <div className="about-story">
            <p>
              I&apos;m Philip Ayoola, a backend developer, technical founder
              and product builder.
            </p>

            <p>
              My work sits between engineering and the real-world problems
              businesses need technology to solve. I&apos;m interested not only
              in how software works, but why it should exist, who needs it and
              how it operates after launch.
            </p>

            <p>
              That perspective has led me to work across commerce, logistics,
              marketplace operations and financial technology.
            </p>
          </div>

        </div>

        <div className="discipline-grid">
          {disciplines.map((discipline) => (
            <article className="discipline-card" key={discipline.number}>
              <div className="discipline-top">
                <span>{discipline.number}</span>
                <span className="discipline-symbol">↗</span>
              </div>

              <h3>{discipline.title}</h3>
              <p>{discipline.text}</p>
            </article>
          ))}
        </div>

        <div className="about-quote">
          <span>PHILOSOPHY</span>

          <blockquote>
            &ldquo;Build technology around the problem —
            <strong> not the other way around.</strong>&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
