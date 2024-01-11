'use client'

import { useEffect } from 'react'

import { Inter } from 'next/font/google'
import './ui/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/app/stores/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  useEffect(() => {
    window?.localStorage.setItem('theme', 'dark')
    document?.documentElement.classList.add('dark')
  }, [])

  return (
    <html lang='en'>
      <title>Next.js Admin Dashboard</title>
      <meta
        name='description'
        content='An admin dashboard built with Next.js'
      />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <body className={inter.className}>
        <Provider store={store}>
          <ToastContainer />
          <NextUIProvider>{children}</NextUIProvider>
        </Provider>
      </body>
    </html>
  )
}
