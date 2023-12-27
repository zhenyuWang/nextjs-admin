'use client'
import { usePathname } from 'next/navigation'
import classes from './navbar.module.css'
import Search from '@/app/ui/dashboard/Search/Search'
import { MdNotifications, MdOutlineChat, MdPublic } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={classes.container}>
      <div className={classes.title}>{pathname.split('/').pop()}</div>
      <div className={classes.menu}>
        <Search placeholder='Search...' />
        <div className={classes.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
