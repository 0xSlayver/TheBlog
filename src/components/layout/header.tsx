import Logo from '@/components/layout/logo';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { aboutPage, homePage } from '@/paths';
import Link from 'next/link';

function header() {
  return (
    <>
      <header className='flex items-center justify-between px-1 py-5'>
        <Logo />

        <div className='flex items-center gap-5'>
          <nav className='list-none capitalize'>
            <li className='flex gap-5'>
              <ul>
                <Link href={homePage()}>home</Link>
              </ul>
              <ul>
                <Link href={aboutPage()}>about</Link>
              </ul>
            </li>
          </nav>

          <Separator orientation='vertical' />

          <ThemeSwitcher />
        </div>
      </header>

      <Separator />
    </>
  );
}

export default header;
