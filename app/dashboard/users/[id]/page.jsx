import classes from '@/app/ui/dashboard/users/user/user.module.css'
import Image from 'next/image'

const UserPage = async ({ params }) => {
  const { id } = params
  console.log('id', id)

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src='/no-avatar.png' alt='' fill />
        </div>
        John
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <label>Username</label>
          <input type='text' name='username' placeholder='John' />
          <label>Email</label>
          <input type='email' name='email' placeholder='123@123.com' />
          <label>Password</label>
          <input type='password' name='password' />
          <label>Phone</label>
          <input type='text' name='phone' placeholder='12345678900' />
          <label>Address</label>
          <textarea type='text' name='address' placeholder='test address' />
          <label>Is Admin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={true} selected={true}>
              Yes
            </option>
            <option value={false} selected={false}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name='isActive' id='isActive'>
            <option value={true} selected={true}>
              Yes
            </option>
            <option value={false} selected={false}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UserPage
