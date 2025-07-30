import { Button } from "@chakra-ui/react";
import { logoutUser } from "../../features/user/userThunk";
import { resetState } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await dispatch(logoutUser())
      dispatch(resetState());
      navigate("/login");
    } catch (error) {
      console.error(`Logout failed, ${error.message}`);
    }

  }

  return (
    <Button
      onClick={handleLogout}
      size="sm"
      bg="green.600"
      color="white"
      fontWeight="bold"
      px={4}
      py={2}
      borderRadius="md"
      transition="all 0.2s ease-in-out"
      _hover={{ bg: "green.700", transform: "scale(1.02)" }}
    >
      Logout
    </Button>
  );
}
