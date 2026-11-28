import { getArticles } from '@/data/data';
import ArticleCard from '@/features/articles/components/articles/article-card';

type ArticlesPropsType = {
  limit?: number;
  query?: string;
  category?: string;
  sort?: string;
};

async function Articles({ limit }: ArticlesPropsType) {
  const fetchedArticles = await getArticles(limit);

  return (
    <div className='flex w-full flex-col'>
      {fetchedArticles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}

export default Articles;
