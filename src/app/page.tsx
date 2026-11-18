import { ArticlesSkeleton } from '@/components/articles-skeleton';
import Articles from '@/components/articles/articles';
import SectionHeader from '@/components/section-header';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className='flex flex-col gap-6 py-10'>
      <SectionHeader
        title='Latest Articles'
        description='Here you can find my latest articles that you can read!'
      />
      <Suspense fallback={<ArticlesSkeleton />}>
        <Articles />
      </Suspense>
    </div>
  );
}
