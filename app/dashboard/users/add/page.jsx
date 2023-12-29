import { addUser } from '@/app/lib/actions'
import classes from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form} action={addUser}>
        <input type='text' placeholder='username' name='username' required />
        <input type='email' placeholder='email' name='email' required />
        <input
          type='password'
          placeholder='password'
          name='password'
          required
        />
        <input type='phone' placeholder='phone' name='phone' />
        <select name='isAdmin' id='isAdmin' defaultValue={true}>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name='isActive' id='isActive' defaultValue={true}>
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name='address'
          id='address'
          rows='16'
          placeholder='Address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
