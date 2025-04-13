"use client";
import styles from "@/src/styles/book.module.scss";
import fallbackImg from "@/public/Image-not-found.png";

export default function Book({ title, image, author, url }: IProps) {
  return (
    <div className={styles.book}>
      <div>
        <img
          className={styles.img}
          src={`${image}`}
          alt={title}
          onError={(e) => (e.currentTarget.src = `${fallbackImg.src}`)}
        />
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.author}>{author}</h3>
      </div>
      <a
        className={styles.buy_link}
        href={url}
        target="_blank"
        data-disabled={url === null ? true : false}
      >
        {url === null ? "Not found" : "Buy Now"}
      </a>
    </div>
  );
}

// interface
interface IProps {
  title: string;
  image: string;
  author: string;
  url: string;
}
