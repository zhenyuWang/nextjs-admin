import { fetchUsers } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/actions'
import UserList from '@/app/ui/dashboard/users/user/List'

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const pageNum = searchParams?.page * 1 || 1
  const pageSize = 10

  const { total, users } = await fetchUsers(q, pageNum, pageSize)

  const simpleUsers = users.map((item) => {
    const _item = item._doc
    _item._id = _item._id.toString()
    _item.createdAt = _item.createdAt.toString().slice(4, 24)
    return _item
  })

  return (
    <UserList
      users={simpleUsers}
      total={total}
      pageNum={pageNum}
      pageSize={pageSize}
      deleteUser={deleteUser}
    />
  )
}

export default UsersPage
