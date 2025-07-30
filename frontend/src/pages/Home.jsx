import Dashboard from './../components/user/Dashboard'
import { Box} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHabits } from '../features/habit/habitThunk';
import HabitCategory from '../components/habit/HabitCategory';

export default function Home() {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchHabits())
        
    }, []);
    const habits = useSelector(state => state.habit.habits);
    //const completedHabits = habits.filter();

    return (
        <Box>
            <Dashboard habits={habits}/>
            <HabitCategory />
        </Box>
    );
}