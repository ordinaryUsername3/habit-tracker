import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  ButtonGroup,
  Box,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { restoreHabit } from "../../features/habit/habitThunk";
import EmptyState from "./EmptyState";
import { completedHabitsSelector, deletedHabitsSelector, pendingHabitsSelector, pausedHabitsSelector } from "../../features/habit/habitSelectors";

export default function HabitCategory() {


  const dispatch = useDispatch();
  const [filter, setFilter] = useState("pending");
  const message = `No ${filter} habits yet! 🎉`;
  let habitsDisplayed;

  const completedHabits = useSelector(completedHabitsSelector);
  const pendingHabits = useSelector(pendingHabitsSelector);
  const pausedHabits = useSelector(pausedHabitsSelector);
  const deletedHabits = useSelector(deletedHabitsSelector);

  switch (filter) {
    case 'pending':
      habitsDisplayed = pendingHabits
      break;
    case 'completed':
      habitsDisplayed = completedHabits
      break;
    case 'pasued':
      habitsDisplayed = pausedHabits
      break;
    case 'deleted':
      habitsDisplayed = deletedHabits
      break;
    default:
      habitsDisplayed = []
  }
  

  const handleRestore = (id) => {
    dispatch(restoreHabit(id));
  };

  const filters = ["pending", "completed", "paused", "deleted"];

  // Dynamic styles

  return (
    <Box p={6}>
      {/* Filter Buttons */}
      <ButtonGroup mb={6} isAttached size="sm" variant="solid">
        {filters.map(status => (
          <Button
            key={status}
            onClick={() => setFilter(status)}
            isActive={filter === status}
            fontWeight={filter === status ? "bold" : "normal"}
            variant={filter === status ? "solid" : "outline"}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
      </ButtonGroup>

      {/* Habit List */}
      <Stack spacing={4}>
        {habitsDisplayed.length > 0 ? (
          habitsDisplayed.map(habit => (
            <Flex
              key={habit._id}
              justify="space-between"
              align="center"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontWeight="semibold" fontSize="md" color="green.800">
                {habit.title}
              </Text>

              {(filter === "paused" || filter === "deleted") && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleRestore(habit._id)}
                >
                  Restore
                </Button>
              )}
            </Flex>
          ))
        ) : (
          <EmptyState message={message} />
        )}
      </Stack>
    </Box>
  );
}
