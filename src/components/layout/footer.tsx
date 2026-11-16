import Logo from '@/components/layout/logo';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <Separator />

      <footer className='flex items-center justify-center gap-10 py-7'>
        <Logo />

        <div className='flex gap-5'>
          <Link href={''}>LinkedIn</Link>
          <Link href={''}>Github</Link>
          <Link href={''}>About</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
