import { Avatar, AvatarGroup, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import InputField from './../components/InputField';
import { Formik, Form } from "formik";
import { signupSchema } from "../utils/validationSchema";

export default function Profile() {

    return (
        <Box>
            
            <VStack marginBottom={5}>
                <AvatarGroup>
                    <Avatar.Root>
                        <Avatar.Fallback name='John Smith'/>
                        {/*Add Avatar Image*/}
                    </Avatar.Root>
                </AvatarGroup>
                <Flex flexDir='column'>
                    <Text>Name: Ordinary</Text>
                    <Text>Age: 21</Text>
                    <Text>Email: username@domain.com</Text>
                </Flex>
            </VStack>
            <VStack>
                <Formik
                validationSchema={signupSchema}
                initialValues={{name: undefined, age: undefined, email:undefined, password: undefined, confirmPassword: undefined}}>
                    {() => (
                        <Form>
                            <InputField name='email' label='Email'/>
                            <InputField name='name' label='Name'/>
                            <InputField name='age' label='Age'/>
                            <InputField name='password' label='Password'/>
                            <InputField name='confirmPassword' label='Confirm password'/>
                            <Button type='submit'>Update</Button>
                        </Form>
                    )}
                </Formik>
                <Button>Delete Account</Button>
            </VStack>
        </Box>
    );
}

