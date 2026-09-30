import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settlevo Case Study",
  description:
    "Settlevo is a B2B accounts-receivable and collections platform focused on turning receivables into clear collection workflows.",
};

const stack = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "REST APIs",
  "React",
  "TypeScript",
  "Cloud Infrastructure",
];

const workflow = [
  {
    number: "01",
    title: "Invoice",
    text: "Track what customers owe and when payment is expected.",
  },
  {
    number: "02",
    title: "Prioritize",
    text: "Surface accounts and invoices that require attention.",
  },
  {
    number: "03",
    title: "Follow Up",
    text: "Organize collection activity, tasks and payment promises.",
  },
  {
    number: "04",
    title: "Payment",
    text: "Track incoming payments against outstanding receivables.",
  },
  {
    number: "05",
    title: "Reconcile",
    text: "Connect payments back to invoices and customer balances.",
  },
];

export default function SettlevoCaseStudy() {
  return (
    <main className="case-page settlevo-case-page">

      {/* NAVIGATION */}

      <nav className="case-nav">
        <div className="page-container case-nav-inner">
          <Link href="/" className="logo">
            PA<span>.</span>
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to work
          </Link>
        </div>
      </nav>


      {/* HERO */}

      <section className="case-hero settlevo-case-hero">
        <div className="page-container">

          <div className="case-eyebrow">
            <span>02 / CASE STUDY</span>
            <p>B2B · COLLECTIONS · RECEIVABLES</p>
          </div>

          <div className="case-hero-grid">

            <div>
              <h1>Settlevo</h1>

              <h2>
                Turning receivables into
                <span> clear collection workflows.</span>
              </h2>
            </div>

            <div className="case-hero-description">
              <p>
                Settlevo is a B2B accounts-receivable and collections platform
                designed to help businesses organize invoices, follow-ups,
                payment activity and reconciliation.
              </p>

              <a
                href="https://settlevo.com/"
                target="_blank"
                rel="noreferrer"
                className="case-live-button"
              >
                Visit Settlevo ↗
              </a>
            </div>

          </div>


          <div className="case-facts">

            <div>
              <small>ROLE</small>
              <strong>Founder</strong>
              <span>Product &amp; Engineering</span>
            </div>

            <div>
              <small>PRODUCT</small>
              <strong>B2B SaaS</strong>
              <span>Accounts receivable</span>
            </div>

            <div>
              <small>FOCUS</small>
              <strong>Collections</strong>
              <span>Payment operations</span>
            </div>

            <div>
              <small>STATUS</small>
              <strong>Building</strong>
              <span>Product development</span>
            </div>

          </div>

        </div>
      </section>


      {/* REAL DASHBOARD */}

      <section className="settlevo-dashboard-showcase">
        <div className="page-container">

          <div className="settlevo-browser-frame">

            <div className="settlevo-browser-top">
              <div>
                <span />
                <span />
                <span />
              </div>

              <p>settlevo.com</p>

              <span className="browser-secure">SECURE WORKSPACE</span>
            </div>

            <Image
              src="/images/settlevo/dashboard.png"
              alt="Settlevo Collections Command Center"
              width={1500}
              height={900}
              priority
            />

          </div>

          <div className="dashboard-caption">
            <span>COLLECTIONS COMMAND CENTER</span>

            <p>
              A working view of outstanding receivables, accounts requiring
              action, promises, reconciliation and upcoming collection tasks.
            </p>
          </div>

        </div>
      </section>


      {/* PROBLEM */}

      <section className="case-section">
        <div className="page-container case-two-column">

          <div>
            <p className="section-label">01 / The Problem</p>

            <h2>
              Getting paid involves more than
              <span> sending an invoice.</span>
            </h2>
          </div>

          <div className="case-body-copy">
            <p>
              For businesses selling to other businesses, an invoice can begin
              a much longer operational process: knowing what is outstanding,
              deciding who needs attention, following up, tracking promises
              and identifying when a payment has actually arrived.
            </p>

            <p>
              When those activities live across spreadsheets, inboxes,
              messages and bank records, the collections process becomes
              difficult to coordinate.
            </p>

            <p>
              Settlevo is being built to bring that workflow into one
              operational workspace.
            </p>
          </div>

        </div>
      </section>


      {/* WORKFLOW */}

      <section className="case-section settlevo-workflow-section">
        <div className="page-container">

          <div className="case-section-heading">
            <p className="section-label">02 / Collection Workflow</p>

            <h2>
              From invoice
              <br />
              <span>to reconciliation.</span>
            </h2>
          </div>

          <div className="settlevo-workflow">

            {workflow.map((item, index) => (
              <div className="workflow-step" key={item.number}>

                <div className="workflow-number">
                  {item.number}
                </div>

                <div className="workflow-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                {index !== workflow.length - 1 && (
                  <span className="workflow-arrow">→</span>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* COMMAND CENTER */}

      <section className="case-section">
        <div className="page-container">

          <div className="command-center-layout">

            <div className="command-center-copy">
              <p className="section-label">03 / Product Direction</p>

              <h2>
                A collections
                <span> command center.</span>
              </h2>

              <p>
                The product is designed around a simple operational question:
                what does the finance or collections team need to act on
                today?
              </p>

              <p>
                Instead of making reporting the center of the experience,
                Settlevo surfaces outstanding balances, accounts requiring
                action, payment promises, reconciliation work and upcoming
                tasks.
              </p>
            </div>

            <div className="command-center-cards">

              <div className="command-card">
                <small>01</small>
                <strong>Needs Action</strong>
                <p>Customers requiring collection attention.</p>
              </div>

              <div className="command-card">
                <small>02</small>
                <strong>Promises Due</strong>
                <p>Payment commitments requiring follow-up.</p>
              </div>

              <div className="command-card">
                <small>03</small>
                <strong>Collection Queue</strong>
                <p>Prioritized receivables and next actions.</p>
              </div>

              <div className="command-card">
                <small>04</small>
                <strong>Reconciliation</strong>
                <p>Payments waiting to be connected to receivables.</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* PRODUCT IMAGE */}

      <section className="settlevo-site-showcase">
        <div className="page-container">

          <div className="settlevo-site-image">
            <Image
              src="/images/settlevo/landing.png"
              alt="Settlevo website"
              width={1500}
              height={900}
            />
          </div>

        </div>
      </section>


      {/* ARCHITECTURE */}

      <section className="case-section backend-case-section">
        <div className="page-container">

          <div className="case-section-heading">
            <p className="section-label">04 / Product Architecture</p>

            <h2>
              Built around the
              <br />
              <span>receivables lifecycle.</span>
            </h2>
          </div>

          <div className="settlevo-architecture">

            <div className="settlevo-architecture-row">

              <div className="settlevo-architecture-box">
                <small>BUSINESS DATA</small>
                <strong>Customers</strong>
                <span>Accounts &amp; relationships</span>
              </div>

              <div className="settlevo-architecture-box">
                <small>RECEIVABLES</small>
                <strong>Invoices</strong>
                <span>Balances &amp; due dates</span>
              </div>

              <div className="settlevo-architecture-box">
                <small>OPERATIONS</small>
                <strong>Collections</strong>
                <span>Actions &amp; promises</span>
              </div>

            </div>


            <div className="settlevo-architecture-connector">
              <span />
            </div>


            <div className="settlevo-core">
              <small>APPLICATION LAYER</small>
              <h3>Settlevo API</h3>
              <p>Node.js · Express.js · REST</p>
            </div>


            <div className="settlevo-architecture-connector">
              <span />
            </div>


            <div className="settlevo-architecture-row">

              <div className="settlevo-architecture-box">
                <small>DATABASE</small>
                <strong>PostgreSQL</strong>
                <span>Prisma ORM</span>
              </div>

              <div className="settlevo-architecture-box">
                <small>PAYMENTS</small>
                <strong>Payment Records</strong>
                <span>Tracking &amp; allocation</span>
              </div>

              <div className="settlevo-architecture-box">
                <small>FINANCE OPS</small>
                <strong>Reconciliation</strong>
                <span>Payment → receivable</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* STACK */}

      <section className="case-section">
        <div className="page-container">

          <div className="stack-layout">

            <div>
              <p className="section-label">05 / Technology</p>

              <h2>
                Technical
                <br />
                <span>foundation.</span>
              </h2>
            </div>

            <div className="case-stack">

              {stack.map((technology, index) => (
                <div key={technology}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{technology}</strong>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* PRODUCT THINKING */}

      <section className="settlevo-thinking">
        <div className="page-container">

          <div className="settlevo-thinking-number">
            06
          </div>

          <div>
            <p className="section-label">Product Thinking</p>

            <h2>
              Build around the
              <br />
              <span>next action.</span>
            </h2>

            <p>
              Settlevo has pushed me to think about financial software as an
              operational system rather than simply a dashboard.
            </p>

            <p>
              The useful question is not only &ldquo;what is outstanding?&rdquo;
              but also &ldquo;what should the team do next to move that money
              toward collection?&rdquo;
            </p>
          </div>

        </div>
      </section>


      {/* NEXT */}

      <section className="next-project">
        <div className="page-container">

          <p>BACK TO PROJECT</p>

          <Link href="/work/martflex">
            <span>01</span>

            <div>
              <h2>MartFlex</h2>
              <p>Commerce · Logistics · Marketplace</p>
            </div>

            <strong>→</strong>
          </Link>

        </div>
      </section>

    </main>
  );
}
