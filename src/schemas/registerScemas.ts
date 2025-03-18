import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short')
    .required('First name is required'),
  lastName: Yup.string().min(2, 'Too short').required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone is required'),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
