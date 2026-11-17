import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { chubbo, supreme } from '@/fonts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
      <body className='m-auto flex min-h-dvh max-w-3xl flex-col px-4 sm:px-6'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main className='flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
