import Image from "next/image";

const martflexStack = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "React Native",
  "REST APIs",
];

const settlevoStack = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "React",
  "REST APIs",
];

export default function Projects() {
  return (
    <section id="work" className="projects-section">
      <div className="page-container">

        <div className="projects-heading">
          <div>
            <p className="section-label">01 / Selected Work</p>

            <h2>
              Products built around
              <br />
              <span>real problems.</span>
            </h2>
          </div>

          <p className="projects-intro">
            Products I&apos;ve worked on across commerce, logistics and
            financial technology — from backend systems to real-world
            operations.
          </p>
        </div>


        {/* MARTFLEX */}

        <article className="real-project-card">

          <div className="real-project-copy">
            <div className="project-meta">
              <span>01 /</span>
              <p>COMMERCE · LOGISTICS · MARKETPLACE</p>
            </div>

            <h3>MartFlex</h3>

            <h4>
              Building commerce around
              <br />
              <span>real-world fulfilment.</span>
            </h4>

            <p className="real-project-description">
              A multi-vendor e-commerce and logistics platform connecting
              buyers, sellers and delivery operations through integrated
              marketplace workflows.
            </p>

            <div className="project-stack">
              {martflexStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="real-project-actions">
              <a href="/work/martflex" className="project-primary">
                View Case Study <span>→</span>
              </a>

              <a
                href="https://onelink.to/w4bm9t"
                target="_blank"
                rel="noreferrer"
                className="project-external"
              >
                View MartFlex ↗
              </a>
            </div>
          </div>


          <div className="martflex-visual">

            <div className="phone-shot phone-shot-main">
              <div className="phone-top" />

              <Image
                src="/images/martflex/buyer-home.png"
                alt="MartFlex buyer marketplace application"
                width={430}
                height={900}
                priority
              />
            </div>

            <div className="phone-shot phone-shot-cart">
              <div className="phone-top" />

              <Image
                src="/images/martflex/cart.png"
                alt="MartFlex shopping cart and checkout workflow"
                width={430}
                height={900}
              />
            </div>

            <div className="phone-shot phone-shot-seller">
              <div className="phone-top" />

              <Image
                src="/images/martflex/seller-products.png"
                alt="MartFlex seller product management application"
                width={430}
                height={900}
              />
            </div>

            <div className="visual-label martflex-label">
              <small>LIVE PRODUCT</small>
              <strong>Buyer + Seller ecosystem</strong>
              <span>Commerce · Food · Logistics</span>
            </div>

          </div>
        </article>


        {/* SETTLEVO */}

        <article className="real-project-card settlevo-project">

          <div className="real-project-copy">
            <div className="project-meta">
              <span>02 /</span>
              <p>B2B · COLLECTIONS · FINTECH</p>
            </div>

            <h3>Settlevo</h3>

            <h4>
              Turn outstanding invoices into
              <br />
              <span>clear collection workflows.</span>
            </h4>

            <p className="real-project-description">
              A B2B accounts-receivable and collections platform designed to
              organize payment follow-ups, collection activity, invoices and
              reconciliation in one workspace.
            </p>

            <div className="project-stack">
              {settlevoStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="real-project-actions">
              <a href="/work/settlevo" className="project-primary">
                View Case Study <span>→</span>
              </a>

              <a
                href="https://settlevo.com/"
                target="_blank"
                rel="noreferrer"
                className="project-external"
              >
                Visit Settlevo ↗
              </a>
            </div>
          </div>


          <div className="settlevo-real-visual">

            <div className="desktop-shot">
              <div className="desktop-browser">
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <p>settlevo.com</p>
              </div>

              <Image
                src="/images/settlevo/dashboard.png"
                alt="Settlevo collections command center dashboard"
                width={1500}
                height={900}
              />
            </div>

            <div className="settlevo-secondary-shot">
              <Image
                src="/images/settlevo/landing.png"
                alt="Settlevo website"
                width={1500}
                height={900}
              />
            </div>

            <div className="visual-label settlevo-label">
              <small>COLLECTIONS COMMAND CENTER</small>
              <strong>Receivables → Action</strong>
              <span>Follow-up · Reconciliation</span>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}
