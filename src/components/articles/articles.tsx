import ArticleCard from '@/components/articles/article-card';
import { getArticles } from '@/data/data';

async function Articles() {
  const fetchedArticles = await getArticles();

  return (
    <div className='flex w-fit flex-col'>
      {fetchedArticles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}

export default Articles;
