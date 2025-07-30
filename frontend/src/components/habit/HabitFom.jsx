import {Formik, Form} from 'formik'
import { Stack, Button } from '@chakra-ui/react'
import InputField from '../InputField'
import { habitSchema } from '../../utils/validationSchema'
import { useDispatch } from 'react-redux'
import { addHabit, updateHabit } from '../../features/habit/habitThunk'


export default function HabitForm({title, description, status, frequency, type}) {

    const dispatch = useDispatch();
    return (
       
        <Formik 
        initialValues={{title, description, status, frequency}} 
        validationSchema={habitSchema}
        onSubmit={(values, {resetForm}) => {
            if (type==='Add') {
                dispatch(addHabit(values));
            } else if (type==='Update') {
                dispatch(updateHabit(values))
            }

            resetForm();
        }}>
            {() => (
                 <Stack alignItems='center'>
                    <Form>
                        <InputField name='title' label='Title'/>
                        <InputField name='description' label='Description'/>
                        <InputField name='status' label='Status'/>
                        <InputField name='frequency' label='Frequency'/>
                        <Button type='submit'>{type}</Button>
                    </Form>
                </Stack>
            )}
        </Formik>
        
    )
}
