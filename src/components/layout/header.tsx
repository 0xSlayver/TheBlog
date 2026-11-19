import Logo from '@/components/layout/logo';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { aboutPath, homePath } from '@/paths';
import Link from 'next/link';

function header() {
  return (
    <>
      <header className='flex items-center justify-between border-b px-1 py-5'>
        <Logo />

        <div className='flex items-center gap-5'>
          <nav className='hidden list-none capitalize sm:block'>
            <li className='flex gap-5'>
              <ul>
                <Link href={homePath()}>home</Link>
              </ul>
              <ul>
                <Link href={aboutPath()}>about</Link>
              </ul>
            </li>
          </nav>

          <Separator orientation='vertical' className='hidden sm:block' />

          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
}

export default header;
