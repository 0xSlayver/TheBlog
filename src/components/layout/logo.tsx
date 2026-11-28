import Link from 'next/link';

import { homePath } from '@/paths';

function Logo() {
  return (
    <Link
      className='font-heading text-xl font-semibold tracking-wide sm:text-2xl'
      href={homePath()}
    >
      <span className='text-green-500'>0x</span>Slayver
    </Link>
  );
}

export default Logo;
