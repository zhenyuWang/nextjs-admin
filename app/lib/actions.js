'use server'

import fs from 'fs'
import { revalidatePath } from 'next/cache'
import { User, Product } from './models'
import { connectToDB } from './utils'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import { auth, signIn, signOut } from '@/auth'

export const addUser = async (userInfo) => {
  const { img, username, email, password, phone, address, isAdmin, isActive } =
    userInfo

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      img,
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
    const avatarPath = `./public/users/${id}-avatar.png`

    fs.access(avatarPath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(avatarPath, (err) => {
          if (err) {
            console.error(`Error deleting ${avatarPath}: ${err}`)
          }
        })
      } else {
        console.log('File does not exist')
      }
    })
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to delete user!')
  }

  revalidatePath('/dashboard/users')
}

export const updateUser = async (userInfo) => {
  const {
    id,
    img,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = userInfo

  let changedAvatarPath = `./public/users/${id}-avatar.png`
  let isAvatarChanged = false

  try {
    connectToDB()
    if (img?.startsWith('data:image')) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, '')
      let dataBuffer = Buffer.from(base64Data, 'base64')

      // Write buffer to file
      try {
        fs.writeFileSync(changedAvatarPath, dataBuffer)

        isAvatarChanged = true
      } catch (err) {
        console.log('write user avatar fail', err)
      }
    }

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

    if (isAvatarChanged) {
      updateFields.img = changedAvatarPath.replace('./public', '')
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

export const addProduct = async (productInfo) => {
  const { img, title, price, stock, color, size, category, desc } = productInfo

  try {
    connectToDB()

    const newProduct = new Product({
      img,
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

export const deleteProduct = async (id) => {
  try {
    connectToDB()

    await Product.findByIdAndDelete(id)
    const imgPath = `./public/products/${id}-img.png`

    fs.access(imgPath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imgPath, (err) => {
          if (err) {
            console.error(`Error deleting ${imgPath}: ${err}`)
          }
        })
      } else {
        console.log('File does not exist')
      }
    })
  } catch (err) {
    // TODO: optimize request failure interactions
    console.log(err)
    throw new Error('Failed to delete product!')
  }

  revalidatePath('/dashboard/products')
}

export const updateProduct = async (productInfo) => {
  const { id, img, title, price, stock, color, size, category, desc } =
    productInfo

  let changedImgPath = `./public/products/${id}-img.png`
  let isImgChanged = false

  try {
    connectToDB()
    if (img?.startsWith('data:image')) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, '')
      let dataBuffer = Buffer.from(base64Data, 'base64')

      // Write buffer to file
      try {
        fs.writeFileSync(changedImgPath, dataBuffer)

        isImgChanged = true
      } catch (err) {
        console.log('write product img fail', err)
      }
    }

    const updateFields = {
      title,
      price,
      stock,
      color,
      size,
      category,
      desc,
    }
    if (isImgChanged) {
      updateFields.img = changedImgPath.replace('./public', '')
    }

    await Product.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const authenticate = async (formData) => {
  const { username, password } = formData
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
