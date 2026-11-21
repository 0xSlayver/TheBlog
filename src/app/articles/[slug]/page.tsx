import ArticleContent from '@/components/articles/article-content';
import ArticleMetdata from '@/components/articles/article-metadata';
import { getArticleBySlug } from '@/data/data';
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug((await params).slug);

  if (!article) return notFound();

  return (
    <article className='flex flex-col gap-2.5 py-15'>
      <ArticleMetdata
        author={article.author}
        category={article.category}
        date={article.date.toLocaleDateString()}
      />

      <h1 className='font-heading text-2xl font-semibold sm:text-4xl'>
        {article.title}
      </h1>

      <ArticleContent
        summary={article.summary}
        content={article.articleContent}
      />
    </article>
  );
}

export default ArticlePage;
