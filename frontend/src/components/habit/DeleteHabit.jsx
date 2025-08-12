import { Dialog, Portal, CloseButton, Button, IconButton, Text } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"
import { deleteHabit } from "../../features/habit/habitThunk"
import { useDispatch } from "react-redux"



export default function DeleteHabit({habitId}) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteHabit(habitId));
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <IconButton aria-label="delete habit"><FaTrash /></IconButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Delete Habit</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Text fontWeight='bold'>Are you sure you want to delete this habit ?</Text>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton />
                            </Dialog.CloseTrigger>
                            <Button aria-label="confirm habit deletion" onClick={handleDelete}>Confirm</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}