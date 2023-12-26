import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zhenyu Wang Next.js Admin Dashboard',
  description: 'An admin dashboard built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <body className={inter.className}>{children}</body>
    </html>
  )
}