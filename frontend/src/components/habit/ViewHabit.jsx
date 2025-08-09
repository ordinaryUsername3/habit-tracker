import {
  Portal,
  Dialog,
  Button,
  CloseButton,
} from '@chakra-ui/react';
import UpdateHabitForm from './../habit/UpdateHabitForm';
import { useState } from 'react';

export default function ViewHabit({ habitId }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          View Habit
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header justifyContent={'space-between'} alignItems='center'>
              <Dialog.Title>View Habit</Dialog.Title>
              <CloseButton onClick={handleClose} />
            </Dialog.Header>
            <Dialog.Body>
              <UpdateHabitForm habitId={habitId} onClose={handleClose}/>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
