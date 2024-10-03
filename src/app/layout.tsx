import './globals.css'; 
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample form with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        {children}
      </body>
    </html>
  );
}
