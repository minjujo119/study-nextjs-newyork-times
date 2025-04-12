"use client";
import Link from "next/link";
import styles from "../styles/nav.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={`${styles.link} ${path === "/" ? styles.is_active : ""}`}>
        Home
      </Link>
      <Link href={"/about"} className={`${styles.link} ${path === "/about" ? styles.is_active : ""}`}>
        About
      </Link>
    </nav>
  );
}
