import ArticleDetails from '@/components/articles/article-details';
import ArticleMetdata from '@/components/articles/article-metadata';
import { getArticleBySlug } from '@/data/data';
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug((await params).slug);

  if (!article) return notFound();

  console.log(article);

  return (
    <article className='flex flex-col gap-2.5 py-15'>
      <ArticleMetdata
        author={article.author}
        category={article.category}
        date={article.date.toLocaleDateString()}
      />

      <ArticleDetails
        title={article.title}
        summary={article.summary}
        articleContent={article.articleContent}
      />
    </article>
  );
}

export default ArticlePage;
