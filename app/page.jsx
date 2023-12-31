import { redirect } from 'next/navigation'

const Homepage = () => {
  redirect('/dashboard')

  return null
}

export default Homepage
