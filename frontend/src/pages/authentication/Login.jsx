import { Stack, Field, Input, Button } from "@chakra-ui/react";
import { Link  as ReactLink, useNavigate} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {Formik, Form} from 'formik';
import {loginSchema} from './../../utils/validationSchema';
import InputField from './../../components/app/InputField';
import { loginUser } from "../../features/user/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function Login() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.user.status);
    const navigate = useNavigate();

    useEffect(() => {
        (status === 'success' && navigate('/'))
    }, [navigate, status])
    return (
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          dispatch(loginUser(values));
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
              boxShadow="lg"
              maxW="md"
              mx="auto"
            >
              <InputField
                label="Email"
                name="email"
                placeholder="username@domain.com"
                type="email"
              />
              <InputField
                label="Password"
                name="password"
                placeholder="••••••••"
                type="password"
              />
              <Button
                type="submit"
                width="full"
                colorScheme="green"
                bg="green.400"
                _hover={{ bg: "green.500" }}
                fontWeight="bold"
              >
                Login
              </Button>
              <ChakraLink
                as={ReactLink}
                to="/signup"
                fontSize="sm"
                color="green.600"
                fontWeight="medium"
                _hover={{ textDecoration: "underline", color: "green.700" }}
              >
                Don't have an account? Sign up
              </ChakraLink>
            </Stack>
          </Form>
        )}
      </Formik>


    );
}