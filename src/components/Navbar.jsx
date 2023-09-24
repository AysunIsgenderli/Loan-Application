import { Flex, Link, Text } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'
import { MdLocationOn } from "react-icons/md";
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'


export const Navbar = ({color, active}) => {
    return <>
        <Flex w='100%' justifyContent='space-between' color='rgba(0,0,0,0.5)' position='relative'>
            <Flex justifyContent='space-between' gap='20px'>
                <Link color={active} padding='11px 10px' fontWeight='600' borderBottom='2px solid #ffc628' _hover={{ textDecoration: 'none' }}>Individuals</Link>
                <Link padding='11px 10px' _hover={{ textDecoration: 'none', borderBottom: '2px solid #ffc628' }} color={color} >Business</Link>
                <Link padding='11px 10px' _hover={{ textDecoration: 'none', borderBottom: '2px solid #ffc628' }} color={color} >About bank</Link>
            </Flex>
            <Flex gap='20px' justifyContent='space-between' alignItems='center' color={color}>
                <Link padding='11px 10px' _hover={{ textDecoration: 'none' }}>Online queue</Link>
                <Flex alignItems='center' padding='11px 10px'>
                    <Icon as={MdLocationOn} mr='3px' />
                    <Link _hover={{ textDecoration: 'none' }}>ATM's and branches</Link>
                </Flex>
                <Flex alignItems='center' padding='11px 10px'>
                    <PhoneIcon mr='10px' />
                    <Link _hover={{ textDecoration: 'none' }}>981</Link>
                </Flex>
                <SearchIcon />
            </Flex>
        </Flex>
        <Text bgColor='rgba(0,0,0,0.1)' h='1px' position='absolute' left={0} right={0} top={12}></Text>
    </>
}