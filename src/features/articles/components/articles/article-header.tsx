type ArticleHeaderTypes = {
  title: string;
  summary: string;
};

function ArticleHeader({ title, summary }: ArticleHeaderTypes) {
  return (
    <div className='flex flex-col gap-2.5 font-normal tracking-wide sm:text-lg'>
      <h1 className='font-heading text-2xl font-semibold tracking-wide sm:text-5xl sm:font-bold'>
        {title}
      </h1>
      <p>{summary}</p>
    </div>
  );
}

export default ArticleHeader;
