import ArticleItem from '@/components/articles/article-item';
import SectionHeader from '@/components/section-header';
import { articles } from '@/data/data';

function AllArticles() {
  return (
    <>
      <div className='m-auto flex w-fit flex-col gap-6 py-15 sm:gap-3'>
        <div className='text-center sm:text-left'>
          <SectionHeader
            title='Latest Articles'
            description='Here you can find my latest articles that you can read!'
          />
        </div>

        <div>
          {articles.map((article) => (
            <ArticleItem key={article.title} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllArticles;
