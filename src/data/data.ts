export type ArticleType = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: Date;
  category: string;
  articleContent: string;
};
export const articles: ArticleType[] = [
  {
    id: '1',
    slug: 'understanding-nextjs-app-router-and-server-components',
    title: 'Understanding Next.js App Router and Server Components',
    summary:
      'A beginner-friendly guide to how React Server Components reduce bundle sizes and speed up page loads in Next.js.',
    author: '0xSlayver',
    date: new Date('2026-10-12'),
    category: 'Web Development',
    articleContent: `Next.js introduced the App Router to make building full-stack React applications faster and more intuitive. By default, every component inside the app directory is a React Server Component.

    This means the component renders entirely on the server before reaching the user's browser. As a result, zero JavaScript is sent to the client for static UI elements, drastically improving initial load times and SEO performance across the board.

    When you need interactivity—like onClick handlers, state management with useState, or browser-only APIs—you simply add the "use client" directive at the top of your file. Mixing server and client components lets you keep heavy logic, database queries, and secret API keys securely on the server while keeping interactive elements snappy on the client.

    Furthermore, the App Router introduces advanced data-fetching patterns, allowing you to fetch data directly inside your server components without needing useEffect or complex state libraries. This streamlines your codebase and makes debugging significantly easier as your project scales.`,
  },
  {
    id: '2',
    slug: 'why-minimalist-workspace-setups-boost-daily-focus',
    title: 'Why Minimalist Workspace Setups Boost Daily Focus',
    summary:
      'Clutter competes for your visual attention. Here is how clearing your desk can improve deep work sessions.',
    author: '0xSlayver',
    date: new Date('2026-10-25'),
    category: 'Productivity',
    articleContent: `Your physical environment plays a massive role in your mental clarity and overall productivity. When your desk is covered in sticky notes, tangled cables, and half-empty coffee mugs, your brain is forced to constantly process those items in the background, leading to cognitive fatigue.

    Start by removing everything from your desk except your absolute essentials: your monitor, keyboard, mouse, and a notebook for quick ideas. Route cables neatly underneath the desk using adhesive clips or raceways so they completely stay out of sight.

    A clean surface creates a distinct psychological boundary between rest and work. When you sit down at an organized, distraction-free desk, your brain receives an immediate signal that it is time to lock in and focus on a single task. Over time, this habit drastically increases your capacity for deep work and reduces burnout.`,
  },
  {
    id: '3',
    slug: '5-essential-sql-indexing-tips-for-faster-queries',
    title: '5 Essential SQL Indexing Tips for Faster Queries',
    summary:
      'Learn how database indexes work under the hood and when adding one actually slows down your application.',
    author: '0xSlayver',
    date: new Date('2026-11-02'),
    category: 'Databases',
    articleContent: `As your application grows from handling ten records to millions of rows, unoptimized database queries will noticeably degrade your website's performance. An index acts just like the alphabetical index at the back of a textbook, allowing the database engine to jump straight to the correct row instead of performing a costly full-table scan.

    Always add indexes to columns you frequently filter, sort, or join by—such as category slugs, user IDs, or publication timestamps. However, you must exercise caution and avoid the temptation of indexing every single column in your schema.

    Every time you insert, update, or delete a row, the database must also recalculate and update all associated indexes on that table. Over-indexing can severely degrade write performance, inflate your disk storage usage, and cause unnecessary overhead for your database engine during high-traffic operations.`,
  },
  {
    id: '4',
    slug: 'how-to-brew-pour-over-coffee-like-a-specialty-barista',
    title: 'How to Brew Pour-Over Coffee Like a Specialty Barista',
    summary:
      'Master water temperature, grind size, and pouring technique to unlock sweeter, cleaner flavors at home.',
    author: '0xSlayver',
    date: new Date('2026-11-09'),
    category: 'Lifestyle',
    articleContent: `Great pour-over coffee comes down to precise control over extraction and water flow. If your final cup tastes bitter, dry, and hollow, it is likely over-extracted; conversely, if it tastes sour, salty, and grassy, it suffers from under-extraction.

    Start with fresh specialty beans ground consistently to the size of coarse sea salt. Heat your filtered water to roughly 93°C (200°F)—just below a rolling boil—and always rinse your paper filter with hot water beforehand to eliminate any lingering papery taste and preheat your dripper.

    Begin with the bloom phase: pour roughly twice the weight of the coffee in water and let it sit for 45 seconds to release trapped carbon dioxide. Afterward, continue pouring the remaining water in slow, steady concentric circles, maintaining a stable water level until you reach your target extraction weight. The result is a remarkably clean, sweet, and complex cup.`,
  },
];

export async function getArticles(): Promise<ArticleType[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return articles;
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleType | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return articles.find((article) => article.slug === slug);
}
