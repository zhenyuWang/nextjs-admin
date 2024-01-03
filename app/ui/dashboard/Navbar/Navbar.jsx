'use client'
import { usePathname } from 'next/navigation'
import Search from '@/app/ui/dashboard/Search/Search'
import { MdNotifications, MdOutlineChat, MdPublic } from 'react-icons/md'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'

const Navbar = () => {
  const pathname = usePathname()
  const pathnameArr = pathname.substring(1).split('/')
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
      <div className='flex items-center'>
        <Search placeholder='Search...' />
        <div className='ml-4 flex gap-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
