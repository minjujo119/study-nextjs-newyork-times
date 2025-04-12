"use client";
import Link from "next/link";
import styles from "@/src/styles/category.module.scss"

export default function CategoryBtn({ encoded, name }: IProps) {
  return (
    <Link
      className={styles.category}
      prefetch
      href={`list/${encoded}`}
    >
      {name}
    </Link>
  );
}

// interface
interface IProps {
  encoded: string;
  name: string;
}
