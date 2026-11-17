type ArticlePageProps = {
  params: Promise<{ id: string }>;
};

async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;

  return <>Article ID: {id}</>;
}

export default ArticlePage;
