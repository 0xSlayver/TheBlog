import { Suspense } from 'react';

import Articles from '@/components/articles/articles';
import ArticlesFilter from '@/components/articles/articles-filter';
import ArticlesSort from '@/components/articles/articles-sort';
import ArticleSearch from '@/components/article-search';
import SectionHeader from '@/components/section-header';
import ArticlesListSkeleton from '@/components/articles-list-skeleton';

type ArticlesPageContentProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
  }>;
};

export default async function ArticlesPageContent({
  searchParams,
}: ArticlesPageContentProps) {
  const { q, category, sort } = await searchParams;

  return (
    <div className='flex flex-col gap-5 py-10'>
      <div className='flex flex-col justify-between gap-5'>
        <SectionHeader title='All Articles' />

        <Suspense fallback={<div className='h-10' />}>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <div className='flex-1'>
              <ArticleSearch />
            </div>

            <div className='flex items-center gap-3'>
              <ArticlesSort />
              <ArticlesFilter />
            </div>
          </div>
        </Suspense>
      </div>

      <Suspense
        key={`${q}-${category}-${sort}`}
        fallback={<ArticlesListSkeleton />}
      >
        <Articles query={q} category={category} sort={sort} />
      </Suspense>
    </div>
  );
}
