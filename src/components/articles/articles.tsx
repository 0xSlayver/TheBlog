import ArticleItem from '@/components/articles/article-item';
import { getArticles } from '@/data/data';

async function Articles() {
  const fetchedArticles = await getArticles();

  return (
    <div className='m-auto flex w-fit flex-col'>
      {fetchedArticles.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
}

export default Articles;
