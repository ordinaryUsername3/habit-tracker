import Dashboard from './../components/user/Dashboard'
import { Box} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHabits } from '../features/habit/habitThunk';
import {getUser} from '../features/user/userThunk';
import HabitCategory from '../components/habit/HabitCategory';

export default function Home() {
    const dispatch=useDispatch();
    
    useEffect(() => {
        dispatch(fetchHabits());
        dispatch(getUser());
        
    }, []);
    

    return (
        <Box>
            <Dashboard />
            <HabitCategory />
        </Box>
    );
}