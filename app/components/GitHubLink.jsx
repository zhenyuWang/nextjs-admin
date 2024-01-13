'use client'

import { useTheme } from '@/app/context/theme-context'
import { Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'

export default function ThemeSwitch() {
  const themeContext = useTheme()
  const theme = themeContext?.theme

  return (
    <Link
      href='https://github.com/zhenyuWang/nextjs-admin'
      isExternal
      className='mr-3 shadow-2xl hover:scale-[1.15] active:scale-105 transition-all'
    >
      <FaGithub size={20} color={theme === 'light' ? '#000' : '#fff'} />
    </Link>
  )
}
