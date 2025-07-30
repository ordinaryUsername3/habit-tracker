import InputField from './../../components/app/InputField';
import {Formik, Form} from 'formik';
import { Stack, Button } from '@chakra-ui/react';
import {Link as ReactLink} from 'react-router-dom';
import {Link as ChakraLink} from '@chakra-ui/react';
import { signupSchema } from '../../utils/validationSchema';
import { signupUser } from '../../features/user/userThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const status = useSelector(state => state.user.status)
    useEffect(() => {
        (status === 'success' && navigate('/'))
    }, [status, navigate])
    const dispatch = useDispatch();
    return (
      <Formik
        validationSchema={signupSchema}
        initialValues={{
          email: '',
          name: '',
          age: 0,
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          dispatch(signupUser(values));
        }}
      >
        {() => (
          <Form>
            <Stack
              spacing="6"
              py="8"
              px="4"
              alignItems="center"
              bg="green.50"
              borderRadius="md"
              boxShadow="md"
              maxW="md"
              mx="auto"
              paddingY={10}
            >
              <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="username@domain.com"
              />
              <InputField
                name="name"
                label="Name"
                type="text"
                placeholder="John"
              />
              <InputField
                name="age"
                label="Age"
                type="number"
                placeholder={21}
              />
              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="••••••••"
              />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
              />
              <Button
                padding={5}
                type="submit"
                colorScheme="green"
                bg="green.400"
                _hover={{ bg: "green.500" }}
                fontWeight="bold"
              >
                Signup
              </Button>
              <ChakraLink
                as={ReactLink}
                to="/login"
                fontSize="sm"
                color="green.600"
                fontWeight="medium"
                _hover={{ textDecoration: 'underline', color: 'green.700' }}
              >
                Already have an account? Login
              </ChakraLink>
            </Stack>
          </Form>
        )}
      </Formik>

    );
}

