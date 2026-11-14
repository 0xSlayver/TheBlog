export type Article = {
  title: string;
  summary: string;
  author: string;
  date: Date;
  category: string;
  articleContent: string;
};

export const articles: Article[] = [
  {
    title: 'Understanding Next.js App Router and Server Components',
    summary:
      'A beginner-friendly guide to how React Server Components reduce bundle sizes and speed up page loads in Next.js.',
    author: '0xSlayver',
    date: new Date('2026-10-12'),
    category: 'Web Development',
    articleContent: `Next.js introduced the App Router to make building full-stack React applications faster and more intuitive. By default, every component inside the app directory is a React Server Component.

    This means the component renders entirely on the server before reaching the user's browser. As a result, zero JavaScript is sent to the client for static UI elements, drastically improving initial load times and SEO.

    When you need interactivity—like onClick handlers or useState hooks—you simply add the "use client" directive at the top of your file. Mixing server and client components lets you keep heavy logic on the server while keeping interactive buttons fast on the client.`,
  },
  {
    title: 'Why Minimalist Workspace Setups Boost Daily Focus',
    summary:
      'Clutter competes for your visual attention. Here is how clearing your desk can improve deep work sessions.',
    author: '0xSlayver',
    date: new Date('2026-10-25'),
    category: 'Productivity',
    articleContent: `Your physical environment plays a massive role in your mental clarity. When your desk is covered in sticky notes, tangled cables, and half-empty coffee mugs, your brain constantly processes those items in the background.

    Start by removing everything from your desk except your monitor, keyboard, mouse, and a notebook. Route cables underneath the desk using adhesive clips so they stay out of sight.

    A clean surface creates a clear boundary between rest and work. When you sit down at an organized desk, your brain receives an immediate signal that it is time to focus on a single task.`,
  },
  {
    title: '5 Essential SQL Indexing Tips for Faster Queries',
    summary:
      'Learn how database indexes work under the hood and when adding one actually slows down your application.',
    author: '0xSlayver ',
    date: new Date('2026-11-02'),
    category: 'Databases',
    articleContent: `As your blog grows from ten articles to ten thousand, unoptimized database queries will noticeably slow down your website. An index acts just like the index at the back of a textbook, allowing the database to jump straight to the right row instead of scanning the entire table.

    Always add indexes to columns you frequently filter by, such as category slugs, user IDs, or publication dates. However, avoid indexing every single column.

    Every time you insert or update a row, the database must also update its indexes. Over-indexing can slow down write operations and consume unnecessary disk space.`,
  },
  {
    title: 'How to Brew Pour-Over Coffee Like a Specialty Barista',
    summary:
      'Master water temperature, grind size, and pouring technique to unlock sweeter, cleaner flavors at home.',
    author: '0xSlayver',
    date: new Date('2026-11-09'),
    category: 'Lifestyle',
    articleContent: `Great pour-over coffee comes down to controlling extraction. If your coffee tastes bitter and hollow, it is over-extracted; if it tastes sour and salty, it is under-extracted.

    Use freshly roasted beans ground to the consistency of coarse sea salt. Heat your filtered water to around 93°C (200°F)—just off the boil—and rinse your paper filter first to remove any papery taste.

    Pour twice the weight of the coffee in water to let the grounds "bloom" for 45 seconds. Then, pour the remaining water in slow, steady concentric circles until you reach your target brew weight.`,
  },
];
