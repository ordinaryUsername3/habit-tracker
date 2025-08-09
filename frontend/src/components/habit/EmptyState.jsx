import { Text } from "@chakra-ui/react"


export default function EmptyState({message}) {

    return (
        <Text textAlign='center' mt={10}>
            {message}
        </Text>
    );
}


