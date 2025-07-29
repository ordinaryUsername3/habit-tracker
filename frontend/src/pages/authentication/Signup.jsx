import InputField from './../../components/InputField';
import {Formik, Form} from 'formik';
import { Stack, Button } from '@chakra-ui/react';
import {Link as ReactLink} from 'react-router-dom';
import {Link as ChakraLink} from '@chakra-ui/react';
import { signupSchema } from '../../utils/validationSchema';

export default function Signup() {

    return (
        <Formik validationSchema={signupSchema} 
        initialValues={{email:null, name:null, age:null, password:null, confirmPassword:null}}>
            {() => (
            <Form>
                <Stack alignItems='center'>
                    <InputField name='email' label='Email' type='email' placeholder='username@domain.com'/>
                    <InputField name='name' label='Name' type='text' placeholder='John'/>
                    <InputField name='age' label='Age' type='number' placeholder={21}/>
                    <InputField name='password' label='Password' type='text' placeholder='password123'/>
                    <InputField name='confirmPassword' label='Confirm Password' type='text' placeholder='password123'/>
                    <Button type='submit'>Signup</Button>
                    <ChakraLink as={ReactLink} to='/login'>
                    Aleady have an account ? login
                    </ChakraLink>
                </Stack>
            </Form>
            )}
        </Formik>
    );
}