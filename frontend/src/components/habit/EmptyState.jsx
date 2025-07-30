import { Text } from "@chakra-ui/react"


export default function EmptyState({message}) {

    return (
        <Text textAlign='center' color='gray.500' mt={10}>
            {message}
        </Text>
    );
}


