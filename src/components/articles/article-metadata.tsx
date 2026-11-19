import { Separator } from '@/components/ui/separator';
import { aboutPath } from '@/paths';
import Link from 'next/link';

type ArticleAuthorInfoTypes = {
  author: string;
  category: string;
  date: string;
};

function ArticleMetdata({ author, category, date }: ArticleAuthorInfoTypes) {
  return (
    <div className='flex gap-2.5 text-sm'>
      <Link href={aboutPath()}>{author}</Link>
      <Separator orientation='vertical' />
      <span>{category}</span>
      <Separator orientation='vertical' />
      <span>{date}</span>
    </div>
  );
}

export default ArticleMetdata;
