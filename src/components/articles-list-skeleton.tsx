import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

function ArticlesListSkeleton() {
  return (
    <div className='m-auto flex w-full flex-col'>
      {[1, 2, 3].map((i) => (
        <div key={i} className='w-full'>
          <div className='my-1 flex flex-col rounded p-1 sm:p-2'>
            <div className='flex flex-col gap-2'>
              {/* Title */}
              <Skeleton className='h-6 w-3/4 sm:h-7' />
              {/* Summary */}
              <div className='flex flex-col gap-1.5 pt-1'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-5/6' />
              </div>
            </div>

            {/* Metadata */}
            <div className='flex items-center gap-2 pt-3'>
              <Skeleton className='h-3 w-20' />
              <div className='bg-muted h-3 w-px' />
              <Skeleton className='h-3 w-16' />
              <div className='bg-muted h-3 w-px' />
              <Skeleton className='h-3 w-24' />
            </div>
          </div>

          {i < 3 && <Separator className='my-1' />}
        </div>
      ))}
    </div>
  );
}

export default ArticlesListSkeleton;
