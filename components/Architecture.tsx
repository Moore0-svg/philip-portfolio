const capabilities = [
  {
    number: "01",
    title: "Authentication & Security",
    text: "JWT, OTP verification, role-based access control and KYC workflows.",
  },
  {
    number: "02",
    title: "Payments",
    text: "Payment integrations, transaction workflows and financial operations.",
  },
  {
    number: "03",
    title: "Data",
    text: "PostgreSQL, Prisma ORM, MongoDB and structured application data.",
  },
  {
    number: "04",
    title: "Notifications",
    text: "Transactional notifications and product communication workflows.",
  },
];

export default function Architecture() {
  return (
    <section className="architecture-section">
      <div className="page-container">
        <div className="architecture-heading">
          <div>
            <p className="section-label">02 / Under the Hood</p>

            <h2>
              Engineering beyond
              <br />
              <span>the interface.</span>
            </h2>
          </div>

          <p>
            I design backend systems around real product workflows —
            authentication, payments, marketplace operations, logistics,
            notifications and data management.
          </p>
        </div>

        <div className="architecture-grid">
          <div className="system-map">

            <div className="system-top">
              <div className="system-node">
                <span className="node-icon">W</span>
                <div>
                  <small>CLIENT</small>
                  <strong>Web Application</strong>
                  <p>React / Next.js</p>
                </div>
              </div>

              <div className="system-node">
                <span className="node-icon">M</span>
                <div>
                  <small>CLIENT</small>
                  <strong>Mobile Application</strong>
                  <p>React Native</p>
                </div>
              </div>
            </div>

            <div className="connector connector-one">
              <span />
            </div>

            <div className="api-node">
              <div className="api-badge">JS</div>

              <div>
                <small>APPLICATION LAYER</small>
                <strong>Backend API</strong>
                <p>Node.js · Express.js · REST</p>
              </div>

              <span className="api-status">LIVE</span>
            </div>

            <div className="connector connector-two">
              <span />
            </div>

            <div className="system-bottom">
              <div className="system-node bottom-node">
                <span className="node-icon database-icon">DB</span>
                <div>
                  <small>DATABASE</small>
                  <strong>PostgreSQL</strong>
                  <p>Prisma ORM</p>
                </div>
              </div>

              <div className="system-node bottom-node">
                <span className="node-icon cache-icon">R</span>
                <div>
                  <small>CACHE / JOBS</small>
                  <strong>Redis</strong>
                  <p>Fast application state</p>
                </div>
              </div>

              <div className="system-node bottom-node">
                <span className="node-icon service-icon">API</span>
                <div>
                  <small>INTEGRATIONS</small>
                  <strong>External Services</strong>
                  <p>Payments · KYC · Cloud</p>
                </div>
              </div>
            </div>
          </div>

          <div className="capabilities">
            {capabilities.map((item) => (
              <div className="capability" key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="engineering-principles">
          <div>
            <span>01</span>
            <h3>Build for the workflow</h3>
            <p>
              Start with what users and operations actually need the system to
              accomplish.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Keep systems understandable</h3>
            <p>
              Good architecture should remain maintainable as products and
              teams grow.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Think beyond the API</h3>
            <p>
              Engineering decisions affect customers, operations, payments and
              the wider business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
