import { Flex, Text } from "@chakra-ui/react";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const normalNavStyles = {
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: '0.3s ease-in',
        borderRadius: 2,
        px: 3,
        py: 2
    }
    const hoverStyles = {
        bg: 'lightBlue'
    }
    return (
        <Flex
        justify='space-between'
        alignItems='center'
        px={5}
        py={3}
        bg='gray.100'
        >
            <Text onClick={() => navigate('/')} fontSize='xl' fontWeight='bold' cursor="pointer">Habit Tracker</Text>
            <Flex gap={4}>
                <Text onClick={() => navigate('/')} {...normalNavStyles} _hover={hoverStyles}>Home</Text>
                <Text onClick={() => navigate('/profile')} {...normalNavStyles} _hover={hoverStyles}>Profile</Text>
            </Flex>
            <LogoutButton/>
        </Flex>
    );
}