import ArticleContent from '@/components/articles/article-content';
import ArticleHeader from '@/components/articles/article-header';
import ArticleMetadata from '@/components/articles/article-metadata';
import { getArticleBySlug } from '@/data/data';
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug((await params).slug);

  if (!article) return notFound();

  return (
    <article className='flex flex-col gap-3 py-15'>
      <header className='flex flex-col gap-2'>
        <ArticleMetadata
          author={article.author}
          category={article.category}
          date={article.date}
        />

        <ArticleHeader title={article.title} summary={article.summary} />
      </header>

      <ArticleContent content={article.articleContent} />

      <footer className='text-muted-foreground pt-5 text-center italic'>
        Thank you for reading 🌹
      </footer>
    </article>
  );
}

export default ArticlePage;
