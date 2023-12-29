import { User } from './models'
import { connectToDB } from './utils'

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i')
  const ITEM_PER_PAGE = 2

  try {
    connectToDB()
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, users }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch users!')
  }
}

export const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
]
