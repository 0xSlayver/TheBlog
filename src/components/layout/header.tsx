import Link from 'next/link';
import { Suspense } from 'react';

import HeaderAuth from '@/components/layout/header-auth';
import Logo from '@/components/layout/logo';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { aboutPath, allArticlesPath, homePath } from '@/paths';

export default function Header() {
  return (
    <header className='flex items-center justify-between border-b px-1 py-5'>
      <Logo />

      <div className='flex items-center gap-5'>
        <nav className='hidden list-none capitalize sm:block'>
          <ul className='flex gap-5'>
            <li>
              <Link href={homePath()}>home</Link>
            </li>

            <li>
              <Link href={allArticlesPath()}>Articles</Link>
            </li>

            <li>
              <Link href={aboutPath()}>about</Link>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-2.5'>
          <Separator orientation='vertical' className='hidden sm:block' />

          <ThemeSwitcher />

          <Suspense fallback={null}>
            <HeaderAuth />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
