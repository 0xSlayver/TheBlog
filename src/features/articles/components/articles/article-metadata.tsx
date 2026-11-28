import { Separator } from '@/components/ui/separator';
import { aboutPath } from '@/paths';
import Link from 'next/link';

type ArticleAuthorInfoTypes = {
  author: string;
  category: string;
  date: Date;
};

function ArticleMetadata({ author, category, date }: ArticleAuthorInfoTypes) {
  return (
    <div className='flex gap-2.5 tracking-wide'>
      <Link className='hover:underline' href={aboutPath()}>
        {author}
      </Link>
      <Separator orientation='vertical' />
      <span>{category}</span>
      <Separator orientation='vertical' />
      <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
    </div>
  );
}

export default ArticleMetadata;
