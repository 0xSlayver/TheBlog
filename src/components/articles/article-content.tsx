import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ArticleContentProps = {
  content: string;
};

function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className='prose dark:prose-invert sm:prose-p:text-lg prose-p:my-2 prose-headings:mt-5 prose-headings:mb-2 prose-pre:my-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-0 prose-hr:my-7.5 max-w-none text-black dark:text-white'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default ArticleContent;
