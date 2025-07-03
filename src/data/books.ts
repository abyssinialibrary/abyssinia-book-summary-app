// src/data/books.ts

// 1. Define the type for a single book object for TypeScript type safety
export interface Book {
  id: string; // We'll use the title as a unique ID for simplicity
  title: string;
  author: string;
  short_snippet: string;
  summary: string;
  category: string;
  tags: string[];
  thumbnail_url: string;
  telegram_post_link: string;
}

// 2. Create and export the array of book data
export const allBooks: Book[] = [
  {
    id: "atomic-habits", // a unique identifier for URL slugs
    title: "Atomic Habits",
    author: "James Clear",
    short_snippet: "An easy and proven way to build good habits and break bad ones.",
    summary: "Atomic Habits reshapes the way you think about progress and success, and gives you the tools and strategies you need to transform your habits — whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
    category: "Self-Help",
    tags: ["productivity", "psychology", "habits"],
    thumbnail_url: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
    telegram_post_link: "https://t.me/your_channel_name/123", // Replace with your real links later
  },
  {
    id: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    short_snippet: "Timeless lessons on wealth, greed, and happiness.",
    summary: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics.",
    category: "Finance",
    tags: ["investing", "psychology", "finance"],
    thumbnail_url: "https://m.media-amazon.com/images/I/71eA+3QDoYL._AC_UF1000,1000_QL80_.jpg",
    telegram_post_link: "https://t.me/your_channel_name/124",
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    short_snippet: "A lone astronaut must save the earth from disaster.",
    summary: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
    category: "Sci-Fi",
    tags: ["space", "thriller", "aliens"],
    thumbnail_url: "https://m.media-amazon.com/images/I/91Bd+LX2oQL._AC_UF1000,1000_QL80_.jpg",
    telegram_post_link: "https://t.me/your_channel_name/125",
  },
];

// 3. (Optional but good practice) Create a map for quick lookups by ID
export const booksById = new Map(allBooks.map(book => [book.id, book]));

// 4. (Optional) Get a list of all unique categories
export const allCategories = [...new Set(allBooks.map(book => book.category))];