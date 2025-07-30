import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().required('Field is required'),
    password: yup.string().required('Field is required').min(10, 'Password must be at least 10 characters'),
});

export const signupSchema = yup.object({
    name: yup.string().required(),
    age: yup.number().required('Field is required').min(1).max(100).typeError('Age must be a numerical value'),
    email: yup.string().required('Field is required').email('Invalid email format'),
})

export const habitSchema = yup.object({
    title : yup.string().required('Field is required'),
    description: yup.string(),
    frequency: yup.number().min(1).max(7).required('Field is required'),
});

export const passwordSchema = yup.object({
        currentPassword: yup.string().required('Field is required').min(10, 'Password must be at least 10 characters'),
        newPassword: yup.string().required('Field is required').min(10, 'Password must be at least 10 characters')  
});
