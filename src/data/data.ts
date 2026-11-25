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
    slug: 'typescript-best-practices-2026',
    title: 'TypeScript Best Practices in 2026',
    summary:
      'Practical TypeScript patterns that improve code quality, readability, and maintainability.',
    author: '0xSlayver',
    date: new Date('2026-11-10'),
    category: 'Development',
    articleContent: `
TypeScript has become the default for serious frontend and full-stack development. Writing it well matters more than ever.

![Developer writing TypeScript code](https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200)

## Prefer \`unknown\` Over \`any\`

\`any\` disables type checking. Prefer \`unknown\` and narrow the type:

\`\`\`ts
function processData(data: unknown) {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
  if (Array.isArray(data)) {
    return data.length;
  }
  throw new Error('Unsupported data type');
}
\`\`\`

## Use Discriminated Unions

Instead of optional fields or complex conditionals, use a discriminant:

\`\`\`ts
type Result =
  | { status: 'success'; data: string }
  | { status: 'error'; message: string };

function handleResult(result: Result) {
  if (result.status === 'success') {
    console.log(result.data);
  } else {
    console.error(result.message);
  }
}
\`\`\`

## Prefer \`const\` Assertions and \`as const\`

\`\`\`ts
const routes = ['/', '/about', '/blog'] as const;
type Route = (typeof routes)[number]; // '/' | '/about' | '/blog'
\`\`\`

## Avoid Type Assertions When Possible

Type assertions (\`as\`) should be a last resort. Prefer proper type guards or better modeling.

## Useful Utility Types

| Utility | Purpose |
| :--- | :--- |
| \`Partial<T>\` | Makes all properties optional |
| \`Required<T>\` | Makes all properties required |
| \`Pick<T, K>\` | Selects specific keys |
| \`Omit<T, K>\` | Removes specific keys |
| \`Record<K, V>\` | Creates a map type |

## Final Tips

- Enable \`strict\` mode in \`tsconfig.json\`
- Prefer interfaces for object shapes that may be extended
- Prefer type aliases for unions, intersections, and mapped types
- Keep types close to the code that uses them

Clean TypeScript is less about fancy features and more about clear, honest modeling of your data.

### Useful Resources
- [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Total TypeScript](https://www.totaltypescript.com/)`,
  },
  {
    id: '2',
    slug: 'git-workflow-that-scales',
    title: 'A Git Workflow That Actually Scales',
    summary: 'A practical branching and commit strategy for teams of any size.',
    author: '0xSlayver',
    date: new Date('2026-11-12'),
    category: 'Development',
    articleContent: `
Many teams struggle with messy Git history. A simple, consistent workflow solves most of the pain.

![Git branching visualization](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200)

## Core Principles

1. \`main\` is always deployable
2. Feature branches are short-lived
3. Commits tell a story
4. Pull requests are reviewed before merge

## Recommended Branch Strategy

- \`main\` → production
- \`develop\` (optional) → integration branch
- \`feature/*\` → new features
- \`fix/*\` → bug fixes
- \`hotfix/*\` → urgent production fixes

## Commit Message Convention

Use a consistent format:

\`\`\`
type(scope): short description

[optional body]
\`\`\`

Common types:

- \`feat\`
- \`fix\`
- \`refactor\`
- \`docs\`
- \`chore\`
- \`test\`

Example:

\`\`\`
feat(auth): add password reset flow
\`\`\`

## Useful Commands

\`\`\`bash
# Create and switch to a new branch
git checkout -b feature/user-profile

# Interactive rebase to clean history
git rebase -i main

# Squash commits before merging
git merge --squash feature/user-profile
\`\`\`

## Pull Request Checklist

- [ ] Code compiles and tests pass
- [ ] No unnecessary comments or debug logs
- [ ] Meaningful commit messages
- [ ] Description explains *why*, not just *what*
- [ ] Screenshots or recordings for UI changes

## Final Advice

Keep branches small. Review fast. Merge often. A clean history is a gift to your future self and your teammates.

### Useful Resources
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)`,
  },
  {
    id: '3',
    slug: 'api-design-fundamentals',
    title: 'API Design Fundamentals',
    summary: 'How to design clean, predictable, and developer-friendly APIs.',
    author: '0xSlayver',
    date: new Date('2026-11-14'),
    category: 'Backend',
    articleContent: `
A well-designed API feels obvious. A poorly designed one creates frustration for every consumer.

![API and network connections](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200)

## Resource Naming

Prefer nouns over verbs:

| Bad | Good |
| :--- | :--- |
| \`/getUsers\` | \`/users\` |
| \`/createPost\` | \`/posts\` |
| \`/deleteComment\` | \`/comments/{id}\` |

Use HTTP methods correctly:

- \`GET\` → retrieve
- \`POST\` → create
- \`PUT\` / \`PATCH\` → update
- \`DELETE\` → remove

## Consistent Response Shape

Always return a predictable structure:

\`\`\`json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "total": 42
  },
  "error": null
}
\`\`\`

On error:

\`\`\`json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required"
  }
}
\`\`\`

## Versioning

Two common approaches:

1. URL versioning: \`/v1/users\`
2. Header versioning: \`Accept: application/vnd.api.v1+json\`

URL versioning is simpler for most teams.

## Pagination, Filtering & Sorting

Standard query parameters:

\`\`\`
GET /posts?page=2&limit=20&sort=-createdAt&status=published
\`\`\`

## Status Codes Matter

| Code | Meaning |
| :--- | :--- |
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Unprocessable Entity |
| 500 | Internal Server Error |

## Final Thoughts

Good API design is about empathy. Design for the developer who will consume your API at 2 a.m. while debugging production.

### Useful Resources
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [JSON:API Specification](https://jsonapi.org/)`,
  },
  {
    id: '4',
    slug: 'effective-debugging-strategies',
    title: 'Effective Debugging Strategies',
    summary: 'Systematic approaches to finding and fixing bugs faster.',
    author: '0xSlayver',
    date: new Date('2026-11-16'),
    category: 'Development',
    articleContent: `
Debugging is a skill. The better you get at it, the less time you waste staring at broken code.

![Developer debugging code on multiple screens](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200)

## The Debugging Mindset

1. **Reproduce the bug reliably**
2. **Form a hypothesis**
3. **Test the hypothesis**
4. **Fix and verify**
5. **Prevent recurrence**

## Useful Techniques

### Binary Search the Problem

Comment out or disable large parts of the system until the bug disappears, then narrow down.

### Rubber Duck Debugging

Explain the problem out loud (or to a rubber duck). Many bugs reveal themselves during the explanation.

### Add Strategic Logs

Temporary, well-placed logs are often faster than setting up a full debugger:

\`\`\`ts
console.log('User before update:', user);
console.log('Payload received:', payload);
\`\`\`

### Use the Debugger

Modern tools (VS Code, Chrome DevTools, etc.) are extremely powerful. Learn to use breakpoints, watch expressions, and call stacks.

## Common Categories of Bugs

| Type | Typical Cause |
| :--- | :--- |
| Logic errors | Incorrect conditions or calculations |
| Race conditions | Async timing issues |
| Null / undefined | Missing null checks |
| State bugs | Stale or incorrectly updated state |
| Environment issues | Different behavior between local and production |

## Prevention Is Better

- Write tests for critical paths
- Use TypeScript strictly
- Prefer pure functions when possible
- Keep functions small and focused

> The best debugging session is the one you never have to start.

### Useful Resources
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [VS Code Debugging Guide](https://code.visualstudio.com/docs/editor/debugging)
- [How to Debug Like a Pro](https://www.freecodecamp.org/news/how-to-debug-javascript/)`,
  },
  {
    id: '5',
    slug: 'building-sustainable-focus',
    title: 'Building Sustainable Focus',
    summary:
      'Practical techniques to protect your attention in a distracted world.',
    author: '0xSlayver',
    date: new Date('2026-11-18'),
    category: 'Productivity',
    articleContent: `
Deep work is becoming rare and valuable. Protecting your focus is a competitive advantage.

![Clean minimal desk for deep work](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200)

## The Attention Problem

Modern tools are designed to interrupt you. Notifications, open tabs, and infinite feeds constantly pull your attention away.

## Practical Techniques

### Time Blocking

Schedule specific blocks for deep work and protect them ruthlessly.

Example daily structure:

| Time | Activity |
| :--- | :--- |
| 8:00 – 10:30 | Deep work (no meetings, no Slack) |
| 10:30 – 11:00 | Break + light communication |
| 11:00 – 12:30 | Meetings / collaboration |
| 14:00 – 16:00 | Deep work again |

### Single-Tasking

Multitasking is mostly context switching. Close everything that is not relevant to the current task.

### Environment Design

- Phone in another room
- Full-screen mode
- Noise-cancelling headphones or quiet space
- Clear desk

## The Two-Minute Rule

If something takes less than two minutes, do it immediately. Otherwise, schedule it.

## Recovery Matters

Focus is a finite resource. Sleep, movement, and short breaks restore it.

> You cannot do deep work for 12 hours straight. Four focused hours often produce more than eight distracted ones.

## Final Checklist

- [ ] Identify your peak focus hours
- [ ] Protect at least one deep work block per day
- [ ] Reduce notification sources
- [ ] Review weekly what stole your attention

Focus is a skill. Train it deliberately.

### Useful Resources
- [Deep Work by Cal Newport](https://www.calnewport.com/books/deep-work/)
- [Pomodoro Technique](https://todoist.com/productivity-methods/pomodoro-technique)
- [Focus@Will](https://www.focusatwill.com/)`,
  },
  {
    id: '6',
    slug: 'clean-code-principles',
    title: 'Clean Code Principles That Actually Matter',
    summary:
      'Practical rules for writing code that is easy to read, change, and maintain.',
    author: '0xSlayver',
    date: new Date('2026-11-20'),
    category: 'Development',
    articleContent: `
Clean code is not about perfection. It is about reducing the cost of change.

![Clean and organized workspace](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200)

## Meaningful Names

Names should reveal intent:

\`\`\`ts
// Bad
const d = 86400000;

// Good
const MILLISECONDS_IN_A_DAY = 86_400_000;
\`\`\`

## Small Functions

A function should do one thing and do it well. If you need to scroll to understand it, it is probably too long.

## Avoid Deep Nesting

Prefer early returns:

\`\`\`ts
function processUser(user?: User) {
  if (!user) return;
  if (!user.isActive) return;

  // main logic here
}
\`\`\`

## Comments Should Explain Why

Code should explain *what*. Comments should explain *why*.

\`\`\`ts
// Compensate for the timezone offset because the API returns UTC
const localDate = new Date(apiDate.getTime() + offset);
\`\`\`

## Consistency Over Cleverness

Prefer boring, predictable patterns over clever one-liners that only you understand.

## Key Principles Summary

| Principle | Description |
| :--- | :--- |
| DRY | Don't Repeat Yourself |
| KISS | Keep It Simple, Stupid |
| YAGNI | You Aren't Gonna Need It |
| Single Responsibility | One reason to change |

## Final Thought

> Code is read far more often than it is written. Optimize for the reader.

### Useful Resources
- [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [Refactoring Guru](https://refactoring.guru/)
- [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)`,
  },
];

export async function getArticles(limit?: number): Promise<ArticleType[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (limit) return articles.slice(0, limit);

  return articles;
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleType | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return articles.find((article) => article.slug === slug);
}
