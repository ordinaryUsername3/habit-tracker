import { Flex, Text } from "@chakra-ui/react";
import LogoutButton from "../user/LogoutButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const normalNavStyles = {
    cursor: "pointer",
    fontWeight: "medium",
    fontSize: "sm",
    px: 3,
    py: 2,
    borderRadius: "md",
    transition: "all 0.2s ease-in-out",
    bg: "transparent",
  };

  const hoverStyles = {
    bg: "green.400",
    color: "white",
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      px={6}
      py={4}
      bg="green.500"
      color="whiteAlpha.900"
      boxShadow="md"
    >
      <Text
        onClick={() => navigate("/")}
        fontSize="xl"
        fontWeight="bold"
        cursor="pointer"
        _hover={{ color: "whiteAlpha.800" }}
        transition="all 0.2s ease"
      >
        Habit Tracker
      </Text>

      <Flex gap={3}>
        <Text
          onClick={() => navigate("/")}
          {...normalNavStyles}
          _hover={hoverStyles}
        >
          Home
        </Text>
        <Text
          onClick={() => navigate("/profile")}
          {...normalNavStyles}
          _hover={hoverStyles}
        >
          Profile
        </Text>
      </Flex>

      <LogoutButton />
    </Flex>
  );
}
