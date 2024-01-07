import { User, Product, Transaction } from './models'
import { connectToDB } from './utils'

export const fetchUsers = async (q, pageNum, pageSize) => {
  const regex = new RegExp(q, 'i')

  try {
    connectToDB()
    const total = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(pageSize)
      .skip(pageSize * (pageNum - 1))
    return { total, users }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch users!')
  }
}

export const fetchUser = async (id) => {
  try {
    connectToDB()
    return await User.findById(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch user!')
  }
}

export const fetchProducts = async (q, pageNum, pageSize) => {
  const regex = new RegExp(q, 'i')

  try {
    connectToDB()
    const total = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(pageSize)
      .skip(pageSize * (pageNum - 1))
    return { total, products }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch products!')
  }
}

export const fetchProduct = async (id) => {
  try {
    connectToDB()
    return await Product.findById(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch product!')
  }
}

// mock data
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

export const fetchLatestTransactions = async () => {
  try {
    connectToDB()
    return await Transaction.find().limit(5)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch latest transactions!')
  }
}
