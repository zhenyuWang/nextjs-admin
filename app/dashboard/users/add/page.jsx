import { addUser } from '@/app/lib/actions'
import AddForm from '@/app/ui/dashboard/users/AddForm'

const AddUserPage = () => {
  return <AddForm addUser={addUser} />
}

export default AddUserPage
