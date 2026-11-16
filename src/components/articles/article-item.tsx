import { Separator } from '@/components/ui/separator';
import { ArticleType } from '@/data/data';
import Link from 'next/link';

function ArticleItem({ article }: { article: ArticleType }) {
  return (
    <div className='group/allArticles'>
      <Link
        href={''}
        className='my-1.5 flex flex-col rounded p-3 transition hover:bg-gray-400/5'
      >
        <div className='leading-relaxed'>
          <p className='font-heading text-2xl tracking-wide'>{article.title}</p>
          <p className='tracking-wide'>{article.summary}</p>
        </div>
        <div className='flex flex-wrap items-center gap-2.5 pt-2 text-sm italic'>
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

export default ArticleItem;
