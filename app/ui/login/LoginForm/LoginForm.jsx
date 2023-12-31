'use client'

import { authenticate } from '@/app/lib/actions'
import classes from './loginForm.module.css'
import { useFormState } from 'react-dom'

const LoginForm = () => {
  const [errorMessage, formAction] = useFormState(authenticate, undefined)

  return (
    <form action={formAction} className={classes.form}>
      <h1>Login</h1>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      <button>Login</button>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}
    </form>
  )
}

export default LoginForm
