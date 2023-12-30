'use server'

import { revalidatePath } from 'next/cache'
import { User, Product } from './models'
import { connectToDB } from './utils'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'

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

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

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

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
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
