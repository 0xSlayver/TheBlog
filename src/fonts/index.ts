import localFont from 'next/font/local';

export const chubbo = localFont({
  src: [
    {
      path: './Chubbo-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Chubbo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chubbo',
  display: 'swap',
});

export const supreme = localFont({
  src: [
    {
      path: './Supreme-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Supreme-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Supreme-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-supreme',
  display: 'swap',
});
