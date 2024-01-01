'use client'

import { Inter } from 'next/font/google'
import './ui/globals.css'

import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <title>Next.js Admin Dashboard</title>
      <meta
        name='description'
        content='An admin dashboard built with Next.js'
      />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
