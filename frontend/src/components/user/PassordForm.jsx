import { Formik, Form } from "formik"
import { useDispatch } from "react-redux"
import InputField from "../app/InputField"
import { passwordSchema } from "../../utils/validationSchema";
import {Button, Stack} from '@chakra-ui/react'
import { updatePasswordThunk } from "../../features/user/userThunk";

export default function PasswordForm() {
    const dispatch = useDispatch();
    return (
<Formik
  initialValues={{ currentPassword: '', newPassword: '' }}
  validationSchema={passwordSchema}
  onSubmit={(values, { resetForm }) => {
    dispatch(updatePasswordThunk(values));
    resetForm();
  }}
>
  {() => (
    <Form>
      <Stack
        spacing="6"
        py="8"
        px="4"
        borderRadius="md"
        boxShadow="lg"
        maxW="md"
        mx="auto"
        alignItems="center"
      >
        <InputField
          label="Current password"
          name="currentPassword"
          type="password"
          placeholder="••••••••"
        />
        <InputField
          label="New password"
          name="newPassword"
          type="password"
          placeholder="••••••••"
        />
        <Button
          type="submit"
          width="full"
          fontWeight="bold"
        >
          Change Password
        </Button>
      </Stack>
    </Form>
  )}
</Formik>

    )
}