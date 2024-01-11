'use client'

import { useSelector } from 'react-redux'
import Head from './Head'
import {
  MdPages,
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdBoy,
  MdHelp,
} from 'react-icons/md'
import { LiaSitemapSolid } from 'react-icons/lia'
import { TbSitemap } from 'react-icons/tb'
import { AiFillCodepenCircle } from 'react-icons/ai'
import List from './List'

const menuItems = [
  {
    icon: <MdPages />,
    title: 'Pages',
    list: [
      {
        icon: <MdDashboard />,
        title: 'Dashboard',
        path: '/dashboard',
      },
      {
        icon: <MdSupervisedUserCircle />,
        title: 'Users',
        path: '/dashboard/users',
      },
      {
        icon: <MdShoppingBag />,
        title: 'Products',
        path: '/dashboard/products',
      },
    ],
  },
  {
    icon: <LiaSitemapSolid />,
    title: 'Multilevel nesting',
    list: [
      {
        icon: <TbSitemap />,
        title: 'First level 1',
        list: [
          {
            icon: <TbSitemap />,
            title: 'Second level',
            list: [
              {
                icon: <MdBoy />,
                title: 'Third level',
                path: '/dashboard/multilevel-nesting/first-level/second-level/third-level',
              },
            ],
          },
        ],
      },
      {
        icon: <TbSitemap />,
        title: 'First level 2',
        list: [
          {
            icon: <MdBoy />,
            title: 'Second level',
            path: '/dashboard/multilevel-nesting/first-level/second-level',
          },
        ],
      },
      {
        icon: <MdBoy />,
        title: 'First level page',
        path: '/dashboard/multilevel-nesting/first-level',
      },
    ],
  },
  {
    icon: <AiFillCodepenCircle />,
    title: 'Repository',
    href: 'https://github.com/zhenyuWang/nextjs-admin',
  },
  {
    icon: <MdHelp />,
    title: 'Help',
    href: 'https://github.com/zhenyuWang/nextjs-admin/issues',
  },
]

const Sidebar = () => {
  const isSidebarShown = useSelector((state) => state.sideBarState.isShow)

  return (
    <div
      className={`${
        isSidebarShown ? 'w-[250px]' : 'w-0'
      } transition-width bg-[var(--bgSoft)] overflow-y-auto`}>
      <div className='w-[250px]'>
        <Head />
        <List list={menuItems} level={0} />
      </div>
    </div>
  )
}

export default Sidebar
