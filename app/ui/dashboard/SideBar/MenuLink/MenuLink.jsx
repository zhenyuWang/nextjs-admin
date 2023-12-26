'use client'

import Link from 'next/link'
import classes from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${classes.container} ${
        pathname === item.path && classes.active
      }`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
