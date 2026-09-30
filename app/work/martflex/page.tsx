import Image from "next/image";
import Link from "next/link";

const stack = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "REST APIs",
  "React Native",
  "Authentication",
  "Payment Integration",
];

const responsibilities = [
  "Backend development",
  "Product development",
  "Marketplace workflows",
  "Vendor operations",
  "Logistics operations",
  "Payment integration",
  "Product roadmap",
  "Testing & deployment",
];

export default function MartFlexCaseStudy() {
  return (
    <main className="case-page">

      {/* NAV */}

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

      <section className="case-hero martflex-case-hero">
        <div className="page-container">

          <div className="case-eyebrow">
            <span>01 / CASE STUDY</span>
            <p>COMMERCE · LOGISTICS · MARKETPLACE</p>
          </div>

          <div className="case-hero-grid">
            <div>
              <h1>MartFlex</h1>

              <h2>
                Building a marketplace around
                <span> real-world commerce.</span>
              </h2>
            </div>

            <div className="case-hero-description">
              <p>
                MartFlex is a multi-vendor e-commerce and logistics platform
                connecting buyers, sellers and delivery operations through a
                unified marketplace experience.
              </p>

              <a
                href="https://onelink.to/w4bm9t"
                target="_blank"
                rel="noreferrer"
                className="case-live-button"
              >
                View MartFlex ↗
              </a>
            </div>
          </div>


          <div className="case-facts">
            <div>
              <small>ROLE</small>
              <strong>Founder</strong>
              <span>Technology &amp; Operations</span>
            </div>

            <div>
              <small>FOCUS</small>
              <strong>Backend &amp; Product</strong>
              <span>Commerce infrastructure</span>
            </div>

            <div>
              <small>PLATFORM</small>
              <strong>Multi-sided Marketplace</strong>
              <span>Buyer · Seller · Logistics</span>
            </div>

            <div>
              <small>STATUS</small>
              <strong>Live Product</strong>
              <span>Production system</span>
            </div>
          </div>

        </div>
      </section>


      {/* PRODUCT SHOWCASE */}

      <section className="case-showcase">
        <div className="page-container">

          <div className="case-phone-gallery">

            <div className="case-phone phone-left">
              <Image
                src="/images/martflex/seller-products.png"
                alt="MartFlex seller product management"
                width={430}
                height={900}
              />
            </div>

            <div className="case-phone phone-center">
              <Image
                src="/images/martflex/buyer-home.png"
                alt="MartFlex buyer marketplace"
                width={430}
                height={900}
                priority
              />
            </div>

            <div className="case-phone phone-right">
              <Image
                src="/images/martflex/cart.png"
                alt="MartFlex cart and checkout"
                width={430}
                height={900}
              />
            </div>

          </div>

        </div>
      </section>


      {/* PROBLEM */}

      <section className="case-section">
        <div className="page-container case-two-column">

          <div>
            <p className="section-label">01 / The Product</p>

            <h2>
              Commerce involves more than
              <span> listing products.</span>
            </h2>
          </div>

          <div className="case-body-copy">
            <p>
              Building a marketplace means coordinating several participants
              at once: customers need to discover and purchase products,
              sellers need tools to manage inventory and orders, and
              fulfilment needs to move those orders to customers.
            </p>

            <p>
              MartFlex was built around those connected workflows rather than
              treating e-commerce as only a storefront.
            </p>
          </div>

        </div>
      </section>


      {/* ECOSYSTEM */}

      <section className="case-section case-dark-section">
        <div className="page-container">

          <div className="case-section-heading">
            <p className="section-label">02 / Marketplace Ecosystem</p>

            <h2>
              One platform.
              <br />
              <span>Multiple participants.</span>
            </h2>
          </div>

          <div className="ecosystem-grid">

            <div className="ecosystem-card">
              <span>01</span>
              <div className="ecosystem-icon">B</div>
              <h3>Buyer</h3>
              <p>
                Product discovery, shopping, food ordering, cart,
                checkout, payments and order tracking.
              </p>
            </div>

            <div className="ecosystem-card">
              <span>02</span>
              <div className="ecosystem-icon">S</div>
              <h3>Seller</h3>
              <p>
                Product management, inventory visibility, orders and
                marketplace operations.
              </p>
            </div>

            <div className="ecosystem-card">
              <span>03</span>
              <div className="ecosystem-icon">L</div>
              <h3>Logistics</h3>
              <p>
                Delivery workflows that connect marketplace orders with
                real-world fulfilment.
              </p>
            </div>

            <div className="ecosystem-card">
              <span>04</span>
              <div className="ecosystem-icon">A</div>
              <h3>Operations</h3>
              <p>
                Platform oversight, marketplace administration and the
                operational processes behind the product.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ROLE */}

      <section className="case-section">
        <div className="page-container">

          <div className="case-section-heading compact-heading">
            <p className="section-label">03 / My Role</p>

            <h2>
              Engineering with an
              <br />
              <span>operator&apos;s perspective.</span>
            </h2>
          </div>

          <div className="role-layout">

            <div className="role-intro">
              <p>
                As founder, my role extends beyond writing software.
                I work across technology, product development and the
                operational systems required to make the marketplace work.
              </p>
            </div>

            <div className="responsibility-grid">
              {responsibilities.map((item, index) => (
                <div key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* BACKEND */}

      <section className="case-section backend-case-section">
        <div className="page-container">

          <div className="case-section-heading">
            <p className="section-label">04 / Backend Architecture</p>

            <h2>
              The systems behind
              <br />
              <span>the marketplace.</span>
            </h2>
          </div>


          <div className="case-architecture">

            <div className="architecture-clients">

              <div className="architecture-box">
                <small>CLIENT</small>
                <strong>Buyer</strong>
                <span>Mobile Application</span>
              </div>

              <div className="architecture-box">
                <small>CLIENT</small>
                <strong>Seller</strong>
                <span>Seller Application</span>
              </div>

              <div className="architecture-box">
                <small>CLIENT</small>
                <strong>Logistics</strong>
                <span>Delivery Operations</span>
              </div>

              <div className="architecture-box">
                <small>CLIENT</small>
                <strong>Admin</strong>
                <span>Platform Operations</span>
              </div>

            </div>


            <div className="architecture-line">
              <span />
            </div>


            <div className="architecture-api">
              <small>APPLICATION LAYER</small>

              <h3>MartFlex Backend API</h3>

              <p>Node.js · Express.js · REST APIs</p>
            </div>


            <div className="architecture-line">
              <span />
            </div>


            <div className="architecture-services">

              <div className="architecture-box">
                <small>DATA</small>
                <strong>PostgreSQL</strong>
                <span>Prisma ORM</span>
              </div>

              <div className="architecture-box">
                <small>IDENTITY</small>
                <strong>Authentication</strong>
                <span>OTP · RBAC · KYC</span>
              </div>

              <div className="architecture-box">
                <small>COMMERCE</small>
                <strong>Payments</strong>
                <span>Transaction workflows</span>
              </div>

              <div className="architecture-box">
                <small>COMMUNICATION</small>
                <strong>Notifications</strong>
                <span>Product events</span>
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
                <span>stack.</span>
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


      {/* PRODUCT DETAIL */}

      <section className="case-product-detail">
        <div className="page-container">

          <div className="detail-image">
            <Image
              src="/images/martflex/buyer-home.png"
              alt="MartFlex marketplace interface"
              width={430}
              height={900}
            />
          </div>

          <div className="detail-copy">
            <p className="section-label">06 / Product Thinking</p>

            <h2>
              Engineering connected to
              <span> actual operations.</span>
            </h2>

            <p>
              Working on MartFlex means seeing the consequences of technical
              decisions outside the codebase — in seller workflows, customer
              experience, fulfilment and day-to-day operations.
            </p>

            <p>
              That has shaped how I approach backend engineering: understand
              the business workflow first, then design the technology around
              it.
            </p>
          </div>

        </div>
      </section>


      {/* NEXT */}

      <section className="next-project">
        <div className="page-container">

          <p>NEXT PROJECT</p>

          <Link href="/work/settlevo">
            <span>02</span>

            <div>
              <h2>Settlevo</h2>
              <p>B2B Collections &amp; Receivables</p>
            </div>

            <strong>→</strong>
          </Link>

        </div>
      </section>

    </main>
  );
}
