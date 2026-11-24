import { Skeleton } from '@/components/ui/skeleton';

function ArticleSkeleton() {
  return (
    <article className='flex flex-col gap-2.5 py-15'>
      {/* ArticleMetdata (author | category | date) */}
      <div className='flex items-center gap-2.5 text-sm'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-4 w-px' />
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-4 w-px' />
        <Skeleton className='h-4 w-20' />
      </div>

      {/* h1 title */}
      <div className='my-1 flex flex-col gap-2 sm:my-2'>
        <Skeleton className='h-7 w-full sm:h-12 sm:w-11/12' />
        <Skeleton className='h-7 w-4/5 sm:h-12 sm:w-2/3' />
      </div>

      {/* ArticleContent */}
      <div className='flex flex-col gap-2.5 font-normal tracking-wide sm:text-lg'>
        {/* Summary */}
        <div className='flex flex-col gap-1.5'>
          <Skeleton className='h-4 w-full sm:h-5' />
          <Skeleton className='h-4 w-5/6 sm:h-5' />
        </div>

        {/* Article Content */}
        <div className='mt-4 flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-4 w-full sm:h-5' />
            <Skeleton className='h-4 w-full sm:h-5' />
            <Skeleton className='h-4 w-4/5 sm:h-5' />
          </div>

          {/* Sub-Heading */}
          <Skeleton className='mt-2 h-6 w-56 sm:h-7' />

          <div className='flex flex-col gap-2'>
            <Skeleton className='h-4 w-full sm:h-5' />
            <Skeleton className='h-4 w-11/12 sm:h-5' />
            <Skeleton className='h-4 w-full sm:h-5' />
            <Skeleton className='h-4 w-3/4 sm:h-5' />
          </div>

          {/* Random Markdown styles */}
          <Skeleton className='my-1 h-32 w-full rounded-lg' />

          <div className='flex flex-col gap-2'>
            <Skeleton className='h-4 w-full sm:h-5' />
            <Skeleton className='h-4 w-5/6 sm:h-5' />
          </div>
        </div>

        {/* Footer */}
        <Skeleton className='mx-auto mt-5 h-4 w-44' />
      </div>
    </article>
  );
}

export default ArticleSkeleton;
