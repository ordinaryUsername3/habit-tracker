import {Dialog, Portal, CloseButton, Button, Box} from '@chakra-ui/react'
import AddHabitForm from './../habit/AddHabitForm'
import { useState } from 'react'

export default function AddHabit() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <Box>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                    <Button aria-label='trigger add habit dialog'
                    >Add Habit</Button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header alignItems='center' justifyContent='space-between'>
                                <Dialog.Title>Add Habit</Dialog.Title>   
                                <CloseButton aria-label='close add habit dialog' onClick={handleClose} />                             
                            </Dialog.Header>
                            <Dialog.Body>
                                <AddHabitForm  closeModal={handleClose}/>
                            </Dialog.Body>
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