import styles from "@/src/styles/page-about.module.scss";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.title}>About Us</h1>
      <section className={styles.section}>
        <p>Welcome to the explorer for The New York Times Best Seller.</p>
      </section>
    </div>
  );
}
