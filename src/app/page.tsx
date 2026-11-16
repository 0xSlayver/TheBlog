import AllArticles from '@/components/articles/all-articles';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <div className='flex min-h-dvh flex-col justify-between'>
      <Header />

      <AllArticles />

      <Footer />
    </div>
  );
}
