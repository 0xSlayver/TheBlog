import ArticleCard from '@/components/articles/article-card';
import { getArticles } from '@/data/data';

type ArticlesPropsType = {
  limit?: number;
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
