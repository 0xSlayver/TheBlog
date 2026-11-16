import ArticleItem from '@/components/articles/article-item';
import { articles } from '@/data/data';

function AllArticles() {
  return (
    <div className='m-auto flex w-fit flex-col py-15'>
      {articles.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
}

export default AllArticles;
