import { Stack, Field, Input, Button } from "@chakra-ui/react";
import { Link  as ReactLink} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {Formik, Form} from 'formik';
import {loginSchema} from './../../utils/validationSchema';
import InputField from './../../components/InputField'

export default function Login() {


    return (
        <Formik validationSchema={loginSchema} initialValues={{email: '', password: ''}}>
            {() => (
            <Form>
                <Stack  alignItems='center'>
                    <InputField label='Email' name='email' placeholder='username@domain.com' type='email'/>
                    <InputField label='Password' name='password' placeholder='password123' type='text'/>
                    <Button type="submit">Login</Button>
                    <ChakraLink as={ReactLink} to='/signup'> 
                    Don't have an account ? signup
                    </ChakraLink>
                </Stack>
            </Form>
            )}
        </Formik>
    );
}