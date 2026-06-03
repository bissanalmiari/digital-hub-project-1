import { useState } from "react";
import styles from "../css/Navbar.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">

        <a href="/" className={`navbar-brand ${styles.brand}`}>
          <img src="images/Logo.png" alt="logo" className={styles.logo} />
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

       
        <div className={styles.desktopMenu}>
          <ul className="navbar-nav mx-auto">
            <li><a href="#about" className={`nav-link ${styles.link}`}>About Us</a></li>
            <li><a href="#services" className={`nav-link ${styles.link}`}>Services</a></li>
            <li><a href="#blog" className={`nav-link ${styles.link}`}>Our Blog</a></li>
            <li><a href="#contact" className={`nav-link ${styles.link}`}>Contact</a></li>
          </ul>

          <span className={styles.serviceLabel}>
            <span className={styles.redDot}></span>
            24 Hour Services
          </span>
        </div>

        
        <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#blog" onClick={() => setOpen(false)}>Our Blog</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <div className={styles.mobileService}>
            <span className={styles.redDot}></span>
            24 Hour Services
          </div>
        </div>

        {open && (
          <div
            className={styles.overlay}
            onClick={() => setOpen(false)}
          />
        )}

      </div>
    </nav>
  );
};