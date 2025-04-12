"use client";
import Link from "next/link";
import styles from "../styles/category.module.scss"

export default function Category({ encoded, name }: IProps) {
  return (
    <Link
      prefetch
      href={`list/${encoded}`}
      className={styles.category}
    >
      {name} 👉🏻
    </Link>
  );
}

// interface
interface IProps {
  encoded: string;
  name: string;
}
