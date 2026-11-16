import { homePage } from '@/paths';
import Link from 'next/link';

function Logo() {
  return (
    <Link
      className='font-heading text-2xl font-semibold tracking-wide'
      href={homePage()}
    >
      <span className='text-green-500'>0x</span>Slayver
    </Link>
  );
}

export default Logo;
