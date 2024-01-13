'use client'

import { useTheme } from '@/app/context/theme-context'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeSwitch() {
  const themeContext = useTheme()
  const theme = themeContext?.theme
  const toggleTheme = themeContext?.toggleTheme

  return (
    <button
      className='text-black shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:text-white'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <MdLightMode size={20} color='#000' />
      ) : (
        <MdDarkMode size={20} color='#fff' />
      )}
    </button>
  )
}
