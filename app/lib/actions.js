'use server'

import { revalidatePath } from 'next/cache'
import { User, Product } from './models'
import { connectToDB } from './utils'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import { auth, signIn, signOut } from '@/auth'

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })

    await newUser.save()
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to create user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const deleteUser = async (id) => {
  try {
    connectToDB()

    await User.findByIdAndDelete(id)
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to delete user!')
  }

  revalidatePath('/dashboard/users')
}

export const updateUser = async (userInfo) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    userInfo

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = password ? await bcrypt.hash(password, salt) : ''

    const updateFields = {
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    }

    if (!password) {
      delete updateFields.password
    }

    await User.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const addProduct = async (formData) => {
  const { title, price, stock, color, size, category, desc } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const newProduct = new Product({
      title,
      price,
      stock,
      color,
      size,
      category,
      desc,
    })

    await newProduct.save()
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to create product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()

    await Product.findByIdAndDelete(id)
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to delete product!')
  }

  revalidatePath('/dashboard/products')
}

export const updateProduct = async (formData) => {
  const { id, title, price, stock, color, size, category, desc } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      title,
      price,
      stock,
      color,
      size,
      category,
      desc,
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await Product.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)
  try {
    await signIn('credentials', { username, password })
  } catch (err) {
    if (err.message.includes('CredentialsSignin')) {
      return 'Wrong Credentials!'
    }
    throw err
  }
}

export const getCurrentUser = async () => {
  return await auth()
}

export async function triggerSignOut() {
  await signOut()
}
