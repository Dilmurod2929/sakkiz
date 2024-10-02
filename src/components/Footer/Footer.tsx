import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.description}>
          Copyright ©2024 Gap. All Rights Reserved
        </p>
        <ul className={styles.footer_link}>
          <li>
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Terms
            </a>
          </li>
          <select className={styles.select} name="select">
            <option>English</option>
          </select>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
