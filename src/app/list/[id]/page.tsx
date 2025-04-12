import { getBooks } from "@/src/utils/api";
import styles from "./page.module.scss";

export default async function DetailPage({ params: { id } }: IParams) {
  const categoryInfo: IcategoryInfo = await getBooks(id);
  const books = categoryInfo.books;

  return (
    <div>
      <h1 className={styles.title}>{categoryInfo.display_name}</h1>
      <section className={styles.section}>
        
        {books.map((book) => (
          <div>
            <img src={`${book.book_image}`} alt={book.title} />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <a href={book.amazon_product_url}>Buy Now</a>
          </div>
        ))}
      </section>
    </div>
  );
}

// interface
interface IParams {
  params: { id: string };
}
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
