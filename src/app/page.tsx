import { Suspense } from 'react';

import SectionHeader from '@/components/section-header';
import Articles from '@/features/articles/components/articles/articles';
import ArticlesListSkeleton from '@/features/articles/components/articles-list-skeleton';

export default function Home() {
  return (
    <div className='flex flex-col gap-6 py-10'>
      <SectionHeader
        title='Latest Articles'
        description='Here you can find my latest articles that you can read!'
      />
      <Suspense fallback={<ArticlesListSkeleton />}>
        <Articles limit={3} />
      </Suspense>
    </div>
  );
}
