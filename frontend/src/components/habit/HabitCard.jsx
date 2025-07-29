import { Switch, IconButton, HStack, Text, Button } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa";
import { useState } from "react"
import ViewHabit from "./viewHabit";


export default function HabitCard({status, title}) {

    const [isChecked, setIsChecked] = useState(status === 'completed');
    return (
        <HStack justifyContent='space-between'  width='95%' px={2} py={3} borderRadius={5} backgroundColor='gray.100'>
            <Text id='Title'>{title}</Text>
            <HStack>
            <Text color={isChecked ? 'green': 'orange'} id='status'>{isChecked ? 'Completed': 'Pending'}</Text>
            <Switch.Root colorPalette='green'
            checked={isChecked} onCheckedChange={(e) => setIsChecked(e.checked)}>
                <Switch.HiddenInput/>
                <Switch.Control/>
            </Switch.Root>
            </HStack>
            <HStack>
                <IconButton><FaTrash /></IconButton>
                <ViewHabit />
            </HStack>
            
        </HStack>
    )
}