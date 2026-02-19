import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const isNavigating = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) return;

      const sections = navItems.map((item) => document.getElementById(item));
      const scrollPosition = window.scrollY + 100; // Offset

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveTab(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    isNavigating.current = true;

    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  return (
    <nav className="nav-items" aria-label="Primary">
      <ul className="nav-items-list">
        {navItems.map((item) => (
          <li key={item} style={{ position: "relative" }}>
            <a
              href={`#${item}`}
              className={`nav-link ${activeTab === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
              aria-current={activeTab === item ? "page" : undefined}
            >
              {activeTab === item && (
                <motion.div
                  layoutId="active-pill"
                  className="active-pill"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 1 }}>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
