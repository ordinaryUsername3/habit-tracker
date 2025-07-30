import {
  Portal,
  Dialog,
  Button,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import UpdateHabitForm from './../habit/UpdateHabitForm';

export default function ViewHabit({ habitId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => open ? onOpen() : onClose()}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          View Habit
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>View Habit</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <UpdateHabitForm onClose={onClose} habitId={habitId} />
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
  );
}
