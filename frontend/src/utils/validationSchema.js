import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().required('Field is required'),
    password: yup.string().required('Field is required').min(10, 'Password must be at least 10 characters'),
});

export const signupSchema = yup.object({
    name: yup.string().required(),
    age: yup.number().required('Field is required').min(0).max(100).typeError('Age must be a numerical value'),
    email: yup.string().required('Field is required').email('Invalid email format'),
    password: yup.string().required('Field is required').min(10, 'Password must be at least 10 characters'), 
    confirmPassword: yup.string().required('Please confirm you password').oneOf([yup.ref('password')], 'Passwords must match') 
})

export const habitSchema = yup.object({
    title : yup.string().required,
    description: yup.string(),
    status: yup.string(),
    frequency: yup.number().min(1).max(7),
})