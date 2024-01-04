'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`flex items-center p-4 hover:text-blue-500 hover:bg-gray-700 ${
        pathname === item.path ? 'text-blue-500' : 'text-white'
      }`}>
      {item.icon}
      <span className='ml-2'>{item.title}</span>
    </Link>
  )
}

export default MenuLink
