import styles from "@/src/styles/page-home.module.scss";
import { getCategories } from "@/src/utils/api";
import CategoryBtn from "@/src/components/CategoryBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const categories: ICategory[] = await getCategories();

  return (
    <main>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <section className={styles.section}>
        <div className={styles.category_list}>
          {categories?.map((category) => (
            <CategoryBtn 
              key={category.list_name_encoded}
              encoded={category.list_name_encoded}
              name={category.display_name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

// interface
interface ICategory {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
