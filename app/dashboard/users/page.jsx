import Pagination from '@/app/ui/dashboard/Pagination/Pagination'
import Search from '@/app/ui/dashboard/Search/Search'
import classes from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

const UsersPage = async () => {
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
          <tr>
            <td>
              <div className={classes.user}>
                <Image
                  src='/no-avatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.userImage}
                />
                John
              </div>
            </td>
            <td>123@123.com</td>
            <td>2023.12.27</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={classes.buttons}>
                <Link href={`/dashboard/users/1`}>
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
        </tbody>
      </table>
      <Pagination count={10} />
    </div>
  )
}

export default UsersPage
