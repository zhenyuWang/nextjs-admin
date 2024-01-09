'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '@/app/components/Form/FormInput'
import { loginFormValidationRules } from '@/app/utils/form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Confetti from 'react-dom-confetti'
import { Spinner } from '@nextui-org/react'
import { toast } from 'react-toastify'
import { authenticate } from '@/app/lib/actions'

const LoginPage = () => {
  const [logging, setLogging] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const togglePasswordVisibility = () =>
    setIsVisiblePassword(!isVisiblePassword)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = async (data) => {
    setLogging(true)
    authenticate(data)
    const errMsg = await authenticate(data)
    if (errMsg) {
      toast.error(errMsg, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'dark',
      })
      setLogging(false)
    } else {
      setLoginSuccess(true)
    }
  }

  return (
    <div className='h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#ecddfa] to-[#7ccdf5] dark:from-[#330066] dark:to-[#000]'>
      <div className='w-[35%] min-w-[300px'>
        <h1 className='pb-8 text-center text-3xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              <div
                className='focus:outline-none cursor-pointer'
                data-testid='toggle-password-input-type-sign-in'
                onClick={togglePasswordVisibility}>
                {isVisiblePassword ? (
                  <AiFillEye className='text-2xl text-default-400 pointer-events-none' />
                ) : (
                  <AiFillEyeInvisible className='text-2xl text-default-400 pointer-events-none' />
                )}
              </div>
            }
            validationRule={loginFormValidationRules['password']}
            type={isVisiblePassword ? 'text' : 'password'}
            error={errors.password}
          />
          <div className='relative'>
            <button
              className='w-full h-10 mt-6 flex items-center justify-center animation-btn rounded-3xl'
              disabled={logging}
              type='submit'>
              {logging ? (
                <Spinner size='sm' className='login-btn-spinner mr-2' />
              ) : null}
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
    </div>
  )
}

export default LoginPage
