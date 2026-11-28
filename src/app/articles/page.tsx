import { Suspense } from 'react';

import ArticlesPageContent from '@/features/articles/components/articles/articles-page-content';
import ArticlesListSkeleton from '@/features/articles/components/articles-list-skeleton';

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
