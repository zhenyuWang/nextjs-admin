'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormInput from '@/app/components/Form/FormInput'
import { Image, Textarea, Select, SelectItem, Button } from '@nextui-org/react'
import { MdCloudUpload } from 'react-icons/md'
import { toast } from 'react-toastify'
import { productFormValidationRules } from '@/app/utils/form'
import { Spinner } from '@nextui-org/react'

const AddForm = ({ addProduct }) => {
  const [productInfo, setProductInfo] = useState({
    img: '',
    title: '',
    price: 0,
    stock: 0,
    color: '',
    size: '',
    category: '',
    desc: '',
  })

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
          setProductInfo({ ...productInfo, img: reader.result })
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

  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setSubmitting(true)
    await addProduct({ ...data, img: productInfo.img })
    setSubmitting(false)
  }

  return (
    <form
      className='w-full mt-8 flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='relative mb-10'>
        <Image
          src={productInfo.img || '/no-product.png'}
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
            label='Title'
            placeholder='please input product title'
            register={register}
            name='title'
            validationRule={productFormValidationRules.title}
            error={errors.title}
          />
        </div>
        <div className='flex-1'>
          <FormInput
            label='Price'
            type='number'
            placeholder='please input product price'
            register={register}
            name='price'
            validationRule={productFormValidationRules.price}
            error={errors.price}
          />
        </div>
      </div>
      <div className='w-full mt-4 flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1'>
          <FormInput
            label='Stock'
            type='number'
            placeholder='please input product stock'
            register={register}
            name='stock'
            validationRule={productFormValidationRules.stock}
            error={errors.stock}
          />
        </div>
        <div className='flex-1'>
          <FormInput
            label='Color'
            placeholder='please input your product color'
            register={register}
            name='color'
            validationRule={productFormValidationRules.color}
            error={errors.color}
          />
        </div>
      </div>
      <div className='w-full mt-4 flex gap-5 flex-col sm:flex-row'>
        <div className='flex-1'>
          <FormInput
            label='Size'
            placeholder='please input your product size'
            register={register}
            name='size'
            error={errors.size}
          />
          <div className='mt-2 text-black dark:text-white'>
            {errors.size?.message}
          </div>
        </div>
        <div className='flex-1'>
          <Controller
            name='category'
            control={control}
            rules={productFormValidationRules.category}
            render={({ field }) => (
              <Select
                size='lg'
                label='Category'
                labelPlacement='outside'
                placeholder='Select category'
                {...field}>
                <SelectItem key='phone' value='phone'>
                  Phone
                </SelectItem>
                <SelectItem key='headset' value='headset'>
                  Headset
                </SelectItem>
                <SelectItem key='computer' value='computer'>
                  Computer
                </SelectItem>
              </Select>
            )}
          />
          <div className='mt-2 text-black dark:text-white'>
            {errors.category?.message}
          </div>
        </div>
      </div>
      <div className='w-full mt-4 flex flex-col'>
        <Textarea
          label='Description'
          labelPlacement='outside'
          placeholder='please input product description'
          {...register('desc', productFormValidationRules['desc'])}
        />
        <div className='mt-2 text-black dark:text-white'>
          {errors.desc?.message}
        </div>
      </div>
      <Button
        disabled={submitting}
        className='w-full mt-6'
        color='primary'
        type='submit'>
        {submitting ? (
          <Spinner size='sm' className='submit-btn-spinner mr-2' />
        ) : null}
        Submit
      </Button>
    </form>
  )
}

export default AddForm
