'use client'

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
  return (
    <div>
      <Head />
      <List list={menuItems} level={0} />
    </div>
  )
}

export default Sidebar
