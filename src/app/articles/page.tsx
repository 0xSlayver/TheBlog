import ArticlesListSkeleton from '@/components/articles-list-skeleton';
import Articles from '@/components/articles/articles';
import ArticlesFilter from '@/components/articles/articles-filter';
import ArticlesSort from '@/components/articles/articles-sort';
import ArticleSearch from '@/components/article-search';
import SectionHeader from '@/components/section-header';
import { Suspense } from 'react';

function AllArticlesPage() {
  return (
    <div className='flex flex-col gap-5 py-10'>
      <div className='flex flex-col justify-between gap-5'>
        <div>
          <SectionHeader title='All Articles' />
        </div>
        <div className='flex items-center gap-3'>
          <Suspense>
            <ArticleSearch />
          </Suspense>
          <ArticlesSort />
          <ArticlesFilter />
        </div>
      </div>

      <Suspense fallback={<ArticlesListSkeleton />}>
        <Articles />
      </Suspense>
    </div>
  );
}

export default AllArticlesPage;
