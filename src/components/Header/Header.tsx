"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const toggleClass = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" passHref className={styles.link}>
            <div className={styles.logo} onClick={() => toggleClass(0)}>
              <Image src={logo} alt="Logo" />
              Sakkiz
            </div>
          </Link>
          <ul className={styles.nav_links}>
            <li
              onClick={() => toggleClass(1)}
              className={activeButton === 1 ? styles.newClass : ""}
            >
              <Link href={"/Features"} className={styles.link}>
                Features
              </Link>
            </li>
            <li
              onClick={() => toggleClass(2)}
              className={activeButton === 2 ? styles.newClass : ""}
            >
              <Link href={"/Faq"} className={styles.link}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
