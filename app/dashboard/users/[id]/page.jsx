import { fetchUser } from '@/app/lib/data'

import classes from '@/app/ui/dashboard/users/user/user.module.css'
import Image from 'next/image'

const UserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)
  console.log('user', user)

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src={user.img || '/no-avatar.png'} alt='' fill />
        </div>
        John
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <label>Username</label>
          <input type='text' name='username' placeholder={user.username} />
          <label>Email</label>
          <input type='email' name='email' placeholder={user.email} />
          <label>Password</label>
          <input type='password' name='password' />
          <label>Phone</label>
          <input type='text' name='phone' placeholder={user.phone} />
          <label>Address</label>
          <textarea type='text' name='address' placeholder={user.address} />
          <label>Is Admin?</label>
          <select
            name='isAdmin'
            id='isAdmin'
            defaultValue={user.isAdmin ? true : false}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select
            name='isActive'
            id='isActive'
            defaultValue={user.isActive ? true : false}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UserPage
