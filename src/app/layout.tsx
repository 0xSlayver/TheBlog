import './globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
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
      className={`${chubbo.variable} ${supreme.variable} scroll-smooth antialiased`}
    >
      <body className='m-auto flex min-h-dvh max-w-3xl flex-col px-4 sm:px-6'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main className='flex flex-1 flex-col'>
            <NuqsAdapter>{children}</NuqsAdapter>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
