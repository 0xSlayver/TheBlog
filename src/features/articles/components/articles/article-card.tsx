import { Separator } from '@/components/ui/separator';
import { ArticleType } from '@/data/data';
import { individualArticlePath } from '@/paths';
import Link from 'next/link';

function ArticleCard({ article }: { article: ArticleType }) {
  return (
    <div className='group/allArticles'>
      <Link
        prefetch
        href={individualArticlePath(article.slug)}
        className='my-1 flex flex-col rounded p-1 duration-150 hover:bg-gray-400/10 sm:p-2 dark:hover:bg-gray-400/5'
      >
        <div className='flex flex-col gap-1'>
          <p className='font-heading text-lg tracking-wide sm:text-xl'>
            {article.title}
          </p>
          <p className='line-clamp-2 text-sm tracking-wide sm:text-base'>
            {article.summary}
          </p>
        </div>
        <div className='flex flex-wrap items-center gap-1.5 pt-2 text-xs italic sm:gap-2.5 sm:text-sm'>
          <span>{article.author}</span>
          <Separator orientation='vertical' />
          <span>{article.category}</span>
          <Separator orientation='vertical' />
          <span>{article.date.toLocaleDateString()}</span>
        </div>
      </Link>

      <Separator className='group-last/allArticles:hidden' />
    </div>
  );
}

export default ArticleCard;
