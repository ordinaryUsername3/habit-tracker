import { IconButton, Icon } from "@chakra-ui/react";
import {IoMoon, IoSunny} from "react-icons/io5";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

export default function ColorModeSwitcher() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <IconButton 
        aria-label="Toggle theme"
        onClick={toggleColorMode}
        colorScheme={useColorModeValue("purple", "orange")}
        _focus={{outline: "none"}}
        >
            <Icon>{colorMode === 'light' ? <IoMoon /> : <IoSunny />}</Icon>
        </IconButton>

    )
}