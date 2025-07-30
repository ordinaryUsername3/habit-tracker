import {Dialog, Portal, CloseButton, Button, Box} from '@chakra-ui/react'
import AddHabitForm from './../habit/AddHabitForm'

export default function AddHabit() {

    return (
        <Box>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button backgroundColor='white' color='gray.500' borderColor='gray.600' _hover={{backgroundColor: 'gray.50'}}>Add Habit</Button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Add Habit</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <AddHabitForm />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton />
                                </Dialog.CloseTrigger>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    )
}

/* Habit Fields
- title
- description
- status
- frequency
- streak */