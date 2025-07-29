import {Formik, Form} from 'formik'
import { Button, Stack } from '@chakra-ui/react'
import InputField from '../InputField'
import { habitSchema } from '../../utils/validationSchema'

export default function AddHabit({title, description, status, streak, frequency, buttonCaption}) {
    return (
       
        <Formik 
        initialValues={{title, description, status, streak, frequency}} 
        validationSchema={habitSchema}
        onSubmit={() => console.log('Habit Added')}>
            {() => (
                 <Stack alignItems='center'>
                    <Form>
                        <InputField name='title' label='Title'/>
                        <InputField name='description' label='Description'/>
                        <InputField name='status' label='Status'/>
                        <InputField name='frequency' label='Frequency'/>
                        <Button type='submit'>{buttonCaption}</Button> 
                    </Form>
                </Stack>
            )}
        </Formik>
        
    )
}
