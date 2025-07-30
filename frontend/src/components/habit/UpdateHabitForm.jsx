import { useDispatch, useSelector } from "react-redux";
import { updateHabit } from "../../features/habit/habitThunk";
import { Formik, Form } from "formik";
import { Button, Stack } from "@chakra-ui/react";
import InputField from "../../components/app/InputField";
import { habitSchema } from "../../utils/validationSchema";

export default function UpdateHabitForm({ habitId, onClose }) {
  const habits = useSelector((state) => state.habit.habits);
  const habit = habits.find((habit) => habit._id === habitId);
  const { title, description, status, streak, frequency } = habit || {};
  const dispatch = useDispatch();

  

  return (
    <Formik
      initialValues={{ title, description, status, streak, frequency }}
      validationSchema={habitSchema}
      onSubmit={async (values, { resetForm }) => {
        await dispatch(updateHabit({ reqData: values, id: habitId }));
        resetForm();
        onClose();
      }}
    >
      {() => (
        <Stack alignItems="center" spacing={4}>
          <Form style={{ width: "100%" }}>
            <InputField name="title" label="Title" />
            <InputField name="description" label="Description" />
            <InputField name="status" label="Status" />
            <InputField name="frequency" label="Frequency" />
            <InputField name="streak" label="Streak" />

            <Button
              type="submit"
              bg="white"
              color="green.600"
              border="2px solid"
              borderColor='green.400'
              _hover={{
                bg: 'green.50',
                borderColor: "green.600",
              }}
              px={5}
              py={3}
              borderRadius="md"
              fontWeight="semibold"
              transition="all 0.2s ease-in-out"
              width="100%"
            >
              Update Habit
            </Button>
          </Form>
        </Stack>
      )}
    </Formik>
  );
}
