'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@/app/context/theme-context'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Search from '@/app/ui/dashboard/Search/Search'
import User from './User'
import {
  MdFullscreen,
  MdOutlineFullscreenExit,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdOutlineFormatIndentDecrease,
  MdOutlineFormatIndentIncrease,
} from 'react-icons/md'
import { Breadcrumbs, BreadcrumbItem, Tooltip, Badge } from '@nextui-org/react'
import ThemeSwitch from '@/app/components/ThemeSwitch'

const Navbar = ({ user }) => {
  const isSidebarShown = useSelector((state) => state.sideBarState.isShow)
  const dispatch = useDispatch()
  const toggleIsShowSideBar = () => {
    dispatch({ type: 'sideBar/toggleIsShow' })
  }

  useEffect(() => {
    const watchWindowSize = () => {
      if (window.innerWidth < 1180) {
        dispatch({ type: 'sideBar/hide' })
      } else {
        dispatch({ type: 'sideBar/show' })
      }
    }
    if (typeof window !== 'undefined') {
      watchWindowSize()
      window.addEventListener('resize', watchWindowSize)

      return () => {
        window.removeEventListener('resize', watchWindowSize)
      }
    }
  }, [dispatch])

  const themeContext = useTheme()
  const theme = themeContext?.theme

  const pathname = usePathname()
  const pathnameArr = pathname.substring(1).split('/')

  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
    setIsFullScreen(!isFullScreen)
  }

  return (
    <div
      className={`absolute top-0 left-0 right-0 z-50 p-4 transition-width flex items-center justify-between round-lg shadow-navbar dark:shadow-navbarDark bg-slate-100 dark:bg-[var(--bgSoft)]`}
    >
      <div className='flex items-center'>
        <div onClick={toggleIsShowSideBar} className='mr-2'>
          {isSidebarShown ? (
            <MdOutlineFormatIndentDecrease size={20} />
          ) : (
            <MdOutlineFormatIndentIncrease size={20} />
          )}
        </div>
        <Breadcrumbs
          color='primary'
          size='lg'
          itemClasses={{
            item: [theme === 'light' ? '' : 'text-slate-200'],
            separator: 'text-slate-500',
          }}
        >
          {pathnameArr.map((item, index) => (
            <BreadcrumbItem
              key={index}
              href={`/${pathnameArr.slice(0, index + 1).join('/')}`}
            >
              {item}
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </div>
      <div className='flex items-center gap-4'>
        <Search placeholder='Search...' />
        <Tooltip
          placement='bottom'
          content={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
        >
          <div className='' onClick={handleFullScreen}>
            {isFullScreen ? (
              <MdOutlineFullscreenExit size={20} />
            ) : (
              <MdFullscreen size={20} />
            )}
          </div>
        </Tooltip>
        <MdOutlineChat size={20} />
        <Badge content='5' color='success'>
          <MdNotifications size={20} />
        </Badge>
        <MdPublic size={20} />
        <ThemeSwitch />
        <User user={user} />
      </div>
    </div>
  )
}

export default Navbar
