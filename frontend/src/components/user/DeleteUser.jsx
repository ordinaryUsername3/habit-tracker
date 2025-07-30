import { Button, Dialog, Portal, CloseButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/user/userThunk";
import { useNavigate } from "react-router-dom";
import {resetState} from '../../features/user/userSlice';


export default function DeleteUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleDeleteUser() {
        dispatch(deleteUser());
        dispatch(resetState());
        navigate('/login');
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button>Delete Account</Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            Delete Account
                        </Dialog.Header>
                        <Dialog.Body>
                            Are you sure you want to delete your account
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <CloseButton>Cancel</CloseButton>
                            </Dialog.ActionTrigger>
                            <Button onClick={handleDeleteUser}>Confirm</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}