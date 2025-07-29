import Dashboard from './../components/Dashboard'
import { Box, VStack } from '@chakra-ui/react';
import HabitCard from '../components/habit/HabitCard';

export default function Home() {

    return (
        <Box>
            <Dashboard />
            
            <VStack id='habitsContainer'>
                <h2>My habits</h2>
                <HabitCard title='Practice python' status='pending'/>
            </VStack>
        </Box>
    );
}