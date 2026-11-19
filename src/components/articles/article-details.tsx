type ArticleDetailsProps = {
  title: string;
  summary: string;
  articleContent: string;
};

function ArticleDetails({
  title,
  summary,
  articleContent,
}: ArticleDetailsProps) {
  return (
    <div className='flex flex-col gap-5 tracking-wide'>
      <h1 className='font-heading text-2xl font-semibold sm:text-4xl'>
        {title}
      </h1>
      <div className='flex flex-col gap-5 sm:text-lg'>
        <p>{summary}</p>
        <p className=''>{articleContent}</p>
      </div>
    </div>
  );
}

export default ArticleDetails;
