import { Formik, Form } from "formik"
import InputField from "../../components/app/InputField"
import { Button, Stack } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addHabit } from "../../features/habit/habitThunk"

export default function AddHabitForm() {
    const dispatch = useDispatch();

    return (
        <Formik
        initialValues={{title: '', description: '', status: '',  frequency: ''}}
        onSubmit={(values, {resetForm}) => {
            dispatch(addHabit(values))
            resetForm();
        }}
        >
            {() => (
                <Stack alignItems='center'>
                    <Form>
                        <InputField name='title' label='Title'/>
                        <InputField name='description' label='Description'/>
                        <InputField name='status' label='Status'/>
                        <InputField name='frequency' label='Frequency'/>
                        <Button type='submit'>Add habit</Button>
                    </Form>
                </Stack>
            )}
        </Formik>
        
    )
}