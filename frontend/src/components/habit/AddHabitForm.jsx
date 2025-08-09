import { Formik, Form } from "formik"
import InputField from "../../components/app/InputField"
import { Button, Stack } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addHabit } from "../../features/habit/habitThunk"
import {habitSchema} from './../../utils/validationSchema'

export default function AddHabitForm({closeModal}) {
    const dispatch = useDispatch();

    return (
        <Formik
        initialValues={{title: '', description: '', status: '',  frequency: ''}}
        onSubmit={(values, {resetForm}) => {
            values.status = values.status ?? 'pending';
            dispatch(addHabit(values))
            resetForm();
            closeModal(); 
        }}
        validationSchema={habitSchema}
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