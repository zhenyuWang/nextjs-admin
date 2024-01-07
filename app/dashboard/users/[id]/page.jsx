import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

import UpdateForm from '@/app/ui/dashboard/users/UpdateForm'

const UserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)

  const userInfo = user._doc
  userInfo._id = userInfo._id.toString()

  return (
    <div className='pt-8 flex flex-col items-center'>
      <UpdateForm user={userInfo} updateUser={updateUser} />
    </div>
  )
}

export default UserPage
