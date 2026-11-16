import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { chubbo, supreme } from '@/fonts';

export const metadata: Metadata = {
  title: '0xSlayver',
  description: '0xSlayver',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${chubbo.variable} ${supreme.variable}`}
    >
      <body className='m-auto min-h-dvh max-w-3xl px-4 sm:px-6'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
