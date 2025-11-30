import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Head from 'next/head'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Muhammad Khurram Anis - Frontend Developer',
  description: 'Portfolio of Muhammad Khurram Anis, a Frontend Developer specializing in modern web technologies',
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
      </Head>
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}