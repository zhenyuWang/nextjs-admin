export const userFormValidationRules = {
  username: {
    required: 'Username is required!',
    pattern: {
      value: /^\S+$/,
      message: 'Username should not contain spaces.',
    },
  },
  email: {
    required: 'Email is required!',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'The email is incorrect.',
    },
  },
  password: {
    pattern: {
      value: /^[^\s]{8,20}$/,
      message:
        'Please enter a password of 8 to 20 characters. Spaces are not allowed.',
    },
  },
  phone: {
    required: 'Phone number is required!',
    pattern: {
      value:
        /^\+?\d{1,4}?[-.\s]?\(?(?:\d{1,3}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,9}$/,
      message: 'The phone number is incorrect.',
    },
  },
  address: {
    required: 'Address is required',
    pattern: {
      value: /^[a-zA-Z0-9\s,.'-]{3,}$/,
      message: 'Please enter a valid address.',
    },
  },
  isAdmin: {
    required: 'Admin status is required!',
  },
  isActive: {
    required: 'Active status is required!',
  },
}
