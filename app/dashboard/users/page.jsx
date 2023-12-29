import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/Pagination/Pagination'
import Search from '@/app/ui/dashboard/Search/Search'
import classes from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, users } = await fetchUsers(q, page)

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search placeholder='Search for a user...' />
        <Link href='/dashboard/users/add'>
          <button className={classes.addButton}>Add New</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={classes.user}>
                  <Image
                    src={user.img || '/no-avatar.png'}
                    alt=''
                    width={40}
                    height={40}
                    className={classes.avatar}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 24)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={classes.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${classes.button} ${classes.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${classes.button} ${classes.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default UsersPage
