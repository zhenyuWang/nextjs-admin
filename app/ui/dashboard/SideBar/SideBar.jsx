import { getCurrentUser, triggerSignOut } from '@/app/lib/actions'

import Image from 'next/image'
import MenuLink from './MenuLink/MenuLink'
import classes from './sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'

const menuItems = [
  {
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

const Sidebar = async () => {
  const user = await getCurrentUser()

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <Image
          src={user?.img || '/images/avatar.png'}
          className={classes.userImage}
          width={50}
          height={50}
          priority={true}
          alt='avatar'
        />
        <div className={classes.userDetail}>
          <span className={classes.username}>{user?.username || 'admin'}</span>
          <span className={classes.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={classes.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={classes.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action={triggerSignOut}>
        <button className={classes.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar
