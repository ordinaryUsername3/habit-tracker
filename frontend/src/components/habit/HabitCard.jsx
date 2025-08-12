import { Switch, IconButton, HStack, Text, Alert } from "@chakra-ui/react"
import { useState } from "react"
import ViewHabit from "./ViewHabit";
import DeleteHabit from "./DeleteHabit";
import { useSelector } from "react-redux";



export default function HabitCard({habitId}) {
        const habits = useSelector(state => state.habit.habits);
        const habit = habits.filter((habit) => habit._id === habitId);
        const {title, status} = habit[0];

    const [isChecked, setIsChecked] = useState(status === 'completed');
    return (
        <HStack justifyContent='space-between'  width='95%' px={2} py={3} borderRadius={5} backgroundColor='gray.100'>
            <Text id='title'>{title}</Text>
            <HStack>
            <Text >'Pending</Text>
            <Switch.Root colorPalette='green'
            checked={isChecked} onCheckedChange={(e) => setIsChecked(e.checked)}>
                <Switch.HiddenInput/>
                <Switch.Control/>
            </Switch.Root>
            </HStack>
            <HStack>
                <DeleteHabit habitId={habitId}/>
                <ViewHabit habitId={habitId}/>
            </HStack>
            
        </HStack>
    )
}