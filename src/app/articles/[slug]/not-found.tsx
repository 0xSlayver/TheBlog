import { allArticlesPath } from '@/paths';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='my-auto flex flex-col items-center justify-center gap-5 tracking-wide'>
      <p className='text-2xl font-semibold'>Article Not Found..</p>
      <Link
        href={allArticlesPath()}
        className='rounded-lg bg-black px-4 py-2 text-lg text-white dark:bg-white dark:text-black'
      >
        All Articles
      </Link>
    </div>
  );
};

export default NotFound;
