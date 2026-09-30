"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="page-container nav-inner">
        <a href="#" className="logo" aria-label="Philip Ayoola home">
          PA<span>.</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <a
            href="/Philip-Ayoola-CV.pdf"
            className="resume-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
