'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormInput from '@/app/components/Form/FormInput'
import { Image, Textarea, Select, SelectItem, Button } from '@nextui-org/react'
import { MdCloudUpload } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { userFormValidationRules } from '@/app/utils/form'

const UpdateForm = ({ addUser }) => {
  const [userInfo, setUserInfo] = useState({
    img: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: false,
    isActive: false,
    address: '',
  })
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const togglePasswordVisibility = () =>
    setIsVisiblePassword(!isVisiblePassword)

  const handleAvatarChange = async (e) => {
    if (e.target.files?.length) {
      const reader = new FileReader()
      reader.addEventListener('load', async () => {
        if (reader.result.length > 1024 * 1024 * 1) {
          toast.warn('Image size should be less than 1MB', {
            position: 'top-center',
            autoClose: 2000,
            theme: 'dark',
          })
        } else {
          setUserInfo({ ...userInfo, img: reader.result })
        }
        // Prevent if the resource is selected twice, onChange is not triggered
        e.target.value = ''
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.isAdmin = data.isAdmin === 'yes'
    data.isActive = data.isActive === 'yes'
    addUser({ ...data, img: userInfo.img })
  }

  return (
    <form
      className='w-full flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='relative mb-10'>
        <Image
          src={userInfo.img || '/no-avatar.png'}
          radius='full'
          className='w-[100px] h-[100px]'
        />
        <MdCloudUpload
          className='absolute bottom-0 right-0 z-10 text-slate-400'
          size={26}
        />
        <input
          accept='image/*'
          id='avatar-upload'
          type='file'
          className='w-[100px] h-[100px] absolute top-0 left-0  opacity-0 z-20 cursor-pointer'
          onChange={handleAvatarChange}
        />
      </div>
      <div className='w-full flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1'>
          <FormInput
            label='Username'
            placeholder='please input your username'
            description='Spaces not allowed'
            register={register}
            name='username'
            error={errors.username}
          />
        </div>
        <div className='flex-1'>
          <FormInput
            label='Email'
            placeholder='please input your email'
            register={register}
            name='email'
            error={errors.email}
          />
        </div>
      </div>
      <div className='w-full mt-4 flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1'>
          <FormInput
            label='Password'
            placeholder='please input your password'
            description='8~20 non-space characters'
            register={register}
            name='password'
            endContent={
              <button
                className='focus:outline-none'
                data-testid='toggle-password-input-type-sign-in'
                onClick={togglePasswordVisibility}>
                {isVisiblePassword ? (
                  <AiFillEye className='text-2xl text-default-400 pointer-events-none' />
                ) : (
                  <AiFillEyeInvisible className='text-2xl text-default-400 pointer-events-none' />
                )}
              </button>
            }
            type={isVisiblePassword ? 'text' : 'password'}
            error={errors.password}
          />
        </div>
        <div className='flex-1'>
          <FormInput
            label='Phone'
            placeholder='please input your phone number'
            register={register}
            name='phone'
            type='text'
            error={errors.phone}
          />
        </div>
      </div>
      <div className='w-full mt-4 flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1'>
          <Controller
            name='isAdmin'
            control={control}
            rules={userFormValidationRules.isAdmin}
            render={({ field }) => (
              <Select
                label='isAdmin'
                labelPlacement='outside'
                placeholder='Select isAdmin'
                {...field}>
                <SelectItem key='yes' value='yes'>
                  Yes
                </SelectItem>
                <SelectItem key='no' value='no'>
                  No
                </SelectItem>
              </Select>
            )}
          />
          <div className='mt-2 text-black dark:text-white'>
            {errors.isAdmin?.message}
          </div>
        </div>
        <div className='flex-1'>
          <Controller
            name='isActive'
            control={control}
            rules={userFormValidationRules.isActive}
            render={({ field }) => (
              <Select
                label='isActive'
                labelPlacement='outside'
                placeholder='Select isActive'
                {...field}>
                <SelectItem key='yes' value='yes'>
                  Yes
                </SelectItem>
                <SelectItem key='no' value='no'>
                  No
                </SelectItem>
              </Select>
            )}
          />
          <div className='mt-2 text-black dark:text-white'>
            {errors.isActive?.message}
          </div>
        </div>
      </div>
      <div className='w-full mt-4 flex flex-col'>
        <Textarea
          label='Address'
          labelPlacement='outside'
          placeholder='please input your address'
          {...register('address', userFormValidationRules['address'])}
        />
        <div className='mt-2 text-black dark:text-white'>
          {errors.address?.message}
        </div>
      </div>
      <Button className='w-full mt-6' color='primary' type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default UpdateForm
