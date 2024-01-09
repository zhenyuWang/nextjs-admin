'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Search from '@/app/ui/dashboard/Search/Search'
import User from './User'
import {
  MdFullscreen,
  MdOutlineFullscreenExit,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
} from 'react-icons/md'
import { Breadcrumbs, BreadcrumbItem, Tooltip, Badge } from '@nextui-org/react'

const Navbar = () => {
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
    <div className='p-5 flex items-center justify-between round-lg bg-[var(--bgSoft)]'>
      <Breadcrumbs
        color='primary'
        size='lg'
        itemClasses={{
          item: ['text-slate-200'],
          separator: 'text-slate-500',
        }}>
        {pathnameArr.map((item, index) => (
          <BreadcrumbItem
            key={index}
            href={`/${pathnameArr.slice(0, index + 1).join('/')}`}>
            {item}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      <div className='flex items-center gap-4'>
        <Search placeholder='Search...' />
        <Tooltip
          placement='bottom'
          content={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}>
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
        <User />
      </div>
    </div>
  )
}

export default Navbar
