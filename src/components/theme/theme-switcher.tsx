'use client';

import { LucideMoon,LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
    >
      <LucideSun className='size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0' />

      <LucideMoon className='absolute size-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90' />
    </Button>
  );
}

export default ThemeSwitcher;
