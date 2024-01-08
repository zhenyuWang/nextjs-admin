'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '@/app/components/Form/FormInput'
import { loginFormValidationRules } from '@/app/utils/form'
import { authenticate } from '@/app/lib/actions'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Confetti from 'react-dom-confetti'

const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const togglePasswordVisibility = () =>
    setIsVisiblePassword(!isVisiblePassword)

  const [loginSuccess, setLoginSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setLoginSuccess(true)
    setTimeout(() => {
      setLoginSuccess(false)
    }, 100)
    authenticate(data)
  }

  return (
    <div className='w-[35%] min-w-[300px'>
      <h1 className='pb-8 text-center text-3xl font-bold'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Username'
          placeholder='please input your username'
          description='Spaces not allowed'
          register={register}
          name='username'
          validationRule={loginFormValidationRules['username']}
          error={errors.username}
        />
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
          validationRule={loginFormValidationRules['password']}
          type={isVisiblePassword ? 'text' : 'password'}
          error={errors.password}
        />
        <div className='relative'>
          <button
            className='w-full h-10 mt-6 animation-btn rounded-3xl'
            type='submit'>
            Submit
          </button>
          <div className='absolute left-[50%] top-[50%]'>
            <Confetti
              active={loginSuccess}
              config={{
                angle: 90,
                spread: 360,
                startVelocity: 45,
                elementCount: 1000,
                stagger: 0,
                width: '10px',
                height: '10px',
                perspective: '500px',
                dragFriction: 0.1,
              }}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
