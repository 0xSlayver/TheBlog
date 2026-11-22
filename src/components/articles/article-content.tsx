import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

type ArticleDetailsProps = {
  summary: string;
  content: string;
};

function ArticleContent({ summary, content }: ArticleDetailsProps) {
  return (
    <div className='flex flex-col gap-2.5 font-normal tracking-wide sm:text-lg'>
      <p>{summary}</p>

      <div className='prose dark:prose-invert sm:prose-p:text-lg prose-p:my-2 prose-headings:mt-6 prose-headings:mb-2 prose-pre:my-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-0 prose-hr:my-7.5 max-w-none text-black dark:text-white'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[rehypeHighlight, { detect: true }]]}
        >
          {content}
        </ReactMarkdown>
      </div>

      <p className='text-muted-foreground pt-5 text-center italic'>
        Thank you for reading 🌹
      </p>
    </div>
  );
}

export default ArticleContent;
