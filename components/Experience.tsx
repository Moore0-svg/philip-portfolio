const skills = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "JavaScript",
  "MongoDB",
  "Git",
  "Postman",
  "JWT",
  "OTP",
  "RBAC",
  "Payment Integrations",
  "KYC",
  "Cloudinary",
  "Expo Notifications",
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="page-container">

        <div className="experience-heading">
          <p className="section-label">04 / Experience</p>

          <h2>
            Building products.
            <br />
            <span>Running systems.</span>
          </h2>
        </div>

        <div className="experience-list">

          <article className="experience-item">
            <div className="experience-date">
              <span>2023</span>
              <span>—</span>
              <span>PRESENT</span>
            </div>

            <div className="experience-company">
              <span className="company-index">01</span>

              <div>
                <h3>MartFlex Go Limited</h3>
                <p>Founder · Technology &amp; Operations</p>
              </div>
            </div>

            <div className="experience-description">
              <p>
                Founded and lead a multi-vendor e-commerce and logistics
                platform connecting buyers, sellers and delivery riders.
              </p>

              <ul>
                <li>Product development from concept through launch</li>
                <li>Backend and marketplace systems</li>
                <li>Vendor and logistics operations</li>
                <li>Product roadmaps and feature planning</li>
              </ul>
            </div>
          </article>


          <article className="experience-item">
            <div className="experience-date">
              <span>2022</span>
              <span>—</span>
              <span>2023</span>
            </div>

            <div className="experience-company">
              <span className="company-index">02</span>

              <div>
                <h3>Moore Integrated Ltd.</h3>
                <p>Customer Success &amp; Onboarding Specialist</p>
              </div>
            </div>

            <div className="experience-description">
              <p>
                Supported merchants through onboarding, account setup,
                platform adoption and day-to-day product use.
              </p>

              <ul>
                <li>Merchant onboarding</li>
                <li>Platform adoption</li>
                <li>Operational support</li>
                <li>Training and support resources</li>
              </ul>
            </div>
          </article>

        </div>


        <div className="credentials-grid">

          <div className="education-block">
            <p className="credentials-label">Education</p>

            <div className="education-item">
              <span>2025 — PRESENT</span>

              <div>
                <h3>Lead City University</h3>
                <p>Master of Computer &amp; Information Science</p>
              </div>
            </div>

            <div className="education-item">
              <span>2018 — 2022</span>

              <div>
                <h3>Olabisi Onabanjo University</h3>
                <p>B.Sc. Computer Science Education</p>
              </div>
            </div>
          </div>


          <div className="toolkit-block">
            <p className="credentials-label">Technical Toolkit</p>

            <div className="skills-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
