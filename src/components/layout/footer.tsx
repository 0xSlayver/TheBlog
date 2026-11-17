import Logo from '@/components/layout/logo';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className='flex flex-col items-center justify-center gap-5 border-t py-3.5 sm:flex-row sm:gap-10 sm:py-7'>
        <Logo />

        <div className='flex gap-5 text-sm sm:text-base'>
          <Link href={''}>LinkedIn</Link>
          <Link href={''}>Github</Link>
          <Link href={''}>About</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
