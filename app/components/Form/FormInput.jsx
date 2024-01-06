import { Input } from '@nextui-org/react'
import { userFormValidationRules } from '../../utils/form'

export default function FormInput({
  defaultValue = '',
  label = '',
  placeholder = '',
  description = '',
  register = null,
  name = '',
  size = 'lg',
  type = 'text',
  color = 'default',
  variant = 'bordered',
  labelPlacement = 'outside',
  endContent = null,
  error = undefined,
}) {
  // Notice: Do not use both the Input isRequired and the react-hook-form validation to check the required fields at the same time.
  // Input isRequired will cause the react - hook - form required fields to be invalid
  return (
    <>
      {register ? (
        <Input
          label={label}
          size={size}
          type={type}
          color={color}
          variant={variant}
          defaultValue={defaultValue}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          description={description}
          endContent={endContent}
          {...register(name, userFormValidationRules[name])}
        />
      ) : (
        <Input
          label={label}
          size={size}
          type={type}
          color={color}
          variant={variant}
          defaultValue={defaultValue}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          description={description}
          endContent={endContent}
        />
      )}
      <div className='mt-2 text-black dark:text-white'>{error?.message}</div>
    </>
  )
}
