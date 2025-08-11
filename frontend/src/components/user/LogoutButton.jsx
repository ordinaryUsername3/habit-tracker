import { Button, Icon } from "@chakra-ui/react";
import { resetState } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { logoutUser } from "../../features/user/userThunk";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await dispatch(logoutUser());
      dispatch(resetState());
      navigate("/login");
    } catch (error) {
      console.error(`Logout failed, ${error.message}`);
    }
  }

  return (
    <Button
      onClick={handleLogout}
      colorScheme="green"
      backgroundColor="green.500"
      _hover={{ backgroundColor: "green.600" }}
      aria-label="logout"
    >
      <Icon colorScheme="green" alignSelf='center'>
        <IoLogOut />
      </Icon>
      Logout
    </Button>
  );
}