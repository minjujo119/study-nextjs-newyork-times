import { getBooks } from "@/src/utils/api";
import styles from "@/src/styles/page-category.module.scss";
import Book from "@/src/components/Book";

// Dynamic Metadata
export async function generateMetadata({ params }: IParams) {
  const { category } = await params;
  return {
    title: category,
  };
}

export default async function ListPage({ params }: IParams) {
  const { category } = await params;
  const categoryInfo: IcategoryInfo = await getBooks(category);
  const bookList = categoryInfo.books;

  return (
    <div>
      <h1 className={styles.title}>{categoryInfo.display_name}</h1>
      <section className={styles.section}>
        <div className={styles.book_list}>
          {bookList.map((book) => (
            <Book
              key={book?.primary_isbn13}
              title={book?.title}
              image={book?.book_image}
              author={book?.author}
              url={book?.amazon_product_url}
              // url={book?.amazon_product_url !== null ? book.amazon_product_url : "not found"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// Interfaces
interface Ibooks {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: [];
  buy_links: [];
  book_uri: string;
}
interface IcategoryInfo {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: string;
  published_date: string;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: string;
  display_name: string;
  normal_list_ends_at: number;
  updated: string;
  books: Ibooks[];
  corrections: [];
}
interface IParams {
  params: Promise<{ category: string }>;
}
