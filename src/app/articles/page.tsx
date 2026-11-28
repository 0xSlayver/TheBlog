import ArticlesListSkeleton from '@/features/articles/components/articles-list-skeleton';
import ArticlesPageContent from '@/features/articles/components/articles/articles-page-content';
import { Suspense } from 'react';

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
