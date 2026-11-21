import ArticleContent from '@/components/articles/article-content';

type ArticleDetailsProps = {
  summary: string;
  articleContent: string;
};

function ArticleDetails({ summary, articleContent }: ArticleDetailsProps) {
  return (
    <div className='flex flex-col gap-5 font-normal tracking-wide'>
      <div className='flex flex-col gap-5 sm:text-lg'>
        <p>{summary}</p>
        <ArticleContent content={articleContent} />
      </div>
    </div>
  );
}

export default ArticleDetails;
