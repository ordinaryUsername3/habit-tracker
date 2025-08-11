import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Flex,
  Button,
} from '@chakra-ui/react';
import { completeHabit, pauseHabit } from '../../features/habit/habitThunk';
import { useDispatch, useSelector } from 'react-redux';
import DeleteHabit from '../habit/DeleteHabit';
import ViewHabit from '../habit/ViewHabit';
import AddHabit from '../habit/AddHabit';
import capitalizeName from '../../utils/capitalzeName';
import SkeletonComponent from '../app/Skeleton';
import { completedHabitsSelector, pausedHabitsSelector, pendingHabitsSelector, deletedHabitsSelector } from '../../features/habit/habitSelectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const name = capitalizeName(useSelector((state) => state.user.user.name));
  const loading = useSelector((state) => state.habit.loading);

  function handleComplete(habitId) {
    dispatch(completeHabit(habitId));
  }

  function handlePause(habitId) {
    dispatch(pauseHabit(habitId));
  }

  const completedHabits = useSelector(completedHabitsSelector);
  const deletedHabits = useSelector(deletedHabitsSelector);
  const pausedHabits = useSelector(pausedHabitsSelector);
  const pendingHabits = useSelector(pendingHabitsSelector);
  const totalHabits = completedHabits.length + deletedHabits.length + pendingHabits.length
  + pausedHabits.length

  if (loading) {
    return <SkeletonComponent />;
  } else return (
        <Box p={6} minH="100vh">
      <Flex margin={5} alignItems='center' justifyContent='flex-end'>
        <AddHabit />
      </Flex>
      {/* Header */}
      <Heading size="lg" mb={4} color="teal.700">
        Welcome Back! {name}
      </Heading>

      {/* Stats Summary */}
      <Flex mb={8} wrap="wrap" gap={6}>
        {[
          { label: 'Total Habits', count:totalHabits, color: 'purple.500' },
          { label: 'Completed', count: completedHabits.length, color: 'green.600' },
          { label: 'Pending', count: pendingHabits.length, color: 'blue.600' },
          { label: 'Paused', count: pausedHabits.length, color: 'yellow.500' },
          { label: 'Deleted', count: deletedHabits.length, color: 'red.500' }
        ].map((stat, idx) => (
          <Box key={idx} p={4} borderRadius="md" shadow="md">
            <Text fontWeight="bold" color="gray.700">{stat.label}:</Text>
            <Text fontSize="lg" color={stat.color}>{stat.count}</Text>
          </Box>
        ))}
      </Flex>

      {/* Habit Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {pendingHabits.map((habit) => (
          <Box
            key={habit._id}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            p={4}
            margin={1}
            boxShadow="base"
            transition="all 0.2s ease-in-out"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}
          >
            <Flex justify="space-between" align="center" mb={2}>
              <Heading size="md" color="teal.600">{habit.title}</Heading>
              <Badge
                px={2}
                py={1}
                borderRadius="full"
                fontSize="0.75rem"
                bg='orange.400'
                color="white"
              >
                {habit.status}
              </Badge>
            </Flex>

            <Text fontSize="sm" color="gray.700">{habit.description}</Text>
            <Text fontSize="sm" mt={2} color="gray.600">
              Frequency: {habit.frequency}/week
            </Text>
            <Text fontSize="sm" color="orange.500">Streak: {habit.streak} 🔥</Text>

            <Flex gap={2} mt={4} flexWrap="wrap">
              <ViewHabit habitId={habit._id} />
              <DeleteHabit habitId={habit._id} />

              <Button
                size="sm"
                bg="red.500"
                color="white"
                _hover={{ bg: 'red.600' }}
                onClick={() => handleComplete(habit._id)}
                aria-label='complete habit'
              >
                Complete
              </Button>

              <Button
                size="sm"
                bg="yellow.400"
                color="black"
                _hover={{ bg: 'yellow.500' }}
                onClick={() => handlePause(habit._id)}
                aria-label='pause habit'
              >
                Pause
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
};

export default Dashboard;
