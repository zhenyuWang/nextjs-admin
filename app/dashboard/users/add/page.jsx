import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { addUser } from '@/app/lib/actions'
import AddForm from '@/app/ui/dashboard/users/AddForm'

const AddUserPage = async () => {
  const loginUser = await auth()
  if (!loginUser.isAdmin) {
    redirect('/dashboard')
  }

  return <AddForm addUser={addUser} />
}

export default AddUserPage
