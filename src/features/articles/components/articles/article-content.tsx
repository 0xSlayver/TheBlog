import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

type ArticleContentProps = {
  content: string;
};

function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className='flex flex-col gap-2.5 font-normal tracking-wide sm:text-lg'>
      <div className='prose dark:prose-invert sm:prose-p:text-lg prose-p:my-2 prose-headings:mt-6 prose-headings:mb-2 prose-headings:font-semibold prose-headings:font-heading prose-pre:my-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-0 prose-hr:my-7.5 prose-img:rounded-lg prose-pre:p-0 max-w-none text-black dark:text-white'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[rehypeHighlight, { detect: true }]]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ArticleContent;
