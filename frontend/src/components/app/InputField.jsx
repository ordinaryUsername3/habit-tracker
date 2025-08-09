import { useField } from "formik";
import {  FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { Input } from "@chakra-ui/react";

function InputField({label, name, ...props}) {
    const [field, meta] = useField(name)

    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input {...props} {...field}/>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
        
    );
}

export default InputField;