'use client'

import Head from './Head'
import MenuLink from './MenuLink'
import { Accordion, AccordionItem } from '@nextui-org/react'
import {
  MdOutlineKeyboardArrowRight,
  MdPages,
  MdOutlineAnalytics,
  MdPerson,
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from 'react-icons/md'

const menuItems = [
  {
    icon: <MdPages />,
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    icon: <MdPerson />,
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div>
      <Head />
      <Accordion
        className='p-0'
        itemClasses={{ title: 'text-white', heading: ' px-3' }}>
        {menuItems.map((item) => (
          <AccordionItem
            key={item.title}
            startContent={item.icon}
            indicator={<MdOutlineKeyboardArrowRight />}
            title={item.title}>
            {item.list.map((link) => (
              <MenuLink item={link} key={link.title} />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Sidebar
