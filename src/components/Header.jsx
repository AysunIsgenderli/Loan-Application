import { Navbar } from "./Navbar"
import { Menu } from "./Menu"
import { Box } from "@chakra-ui/react"

export const Header = ({color,active,src}) => {
    return <Box maxW='80%' m='0 auto'>
        <Navbar color={color} active={active} />
        <Menu src={src} />
    </Box>
}