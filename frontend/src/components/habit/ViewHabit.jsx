import {Portal, Dialog, Button, CloseButton} from '@chakra-ui/react'
import HabitForm from './HabitFom'

import { useDisclosure } from '@chakra-ui/react'

export default function ViewHabit() {

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant='outline' size='sm'>
                    View Habit
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>
                                View Habit
                            </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam, molestiae odio facilis ipsam illo nostrum itaque quos omnis necessitatibus voluptas a quo officiis possimus. Blanditiis vitae porro praesentium. Nemo?</p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button>Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton/>
                            </Dialog.CloseTrigger>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

