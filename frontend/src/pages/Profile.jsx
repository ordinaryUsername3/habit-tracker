import { Avatar, AvatarGroup, Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import InputField from './../components/app/InputField';
import { Formik, Form } from "formik";
import { signupSchema } from "../utils/validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/user/userThunk"; 
import DeleteUser from "../components/user/DeleteUser";
import PasswordForm from "../components/user/PassordForm";

export default function Profile() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.user);
    const {name, age, email} = userData;


    return (
        <Box>  
            <VStack >
                <AvatarGroup alignSelf='center'>
                    <Avatar.Root>
                        <Avatar.Fallback name={name}/>
                        {/*Add Avatar Image*/}
                    </Avatar.Root>
                </AvatarGroup>
           
            
<Formik
  validationSchema={signupSchema}
  initialValues={{ name, age, email }}
  onSubmit={(values) => {
    dispatch(updateUser(values));
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
          name="email"
          label="Email"
          placeholder="username@domain.com"
          type="email"
        />
        <InputField
          name="name"
          label="Name"
          placeholder="John"
          type="text"
        />
        <InputField
          name="age"
          label="Age"
          placeholder="21"
          type="number"
        />
        <Button
          type="submit"
          width="full"
          colorScheme="green"
          bg="green.400"
          _hover={{ bg: "green.500" }}
          fontWeight="bold"
        >
          Update
        </Button>
      </Stack>
    </Form>
  )}
</Formik>

                <PasswordForm />
                <DeleteUser />
            </VStack>
        </Box>
    );
}

