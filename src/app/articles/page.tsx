import { Suspense } from 'react';

import ArticlesListSkeleton from '@/components/articles-list-skeleton';
import ArticlesPageContent from '@/components/articles/articles-page-content';

type Props = {
  searchParams: Promise<{
    q?: string;
    sort?: string;
    category?: string;
  }>;
};

export default function AllArticlesPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<ArticlesListSkeleton />}>
      <ArticlesPageContent searchParams={searchParams} />
    </Suspense>
  );
}
