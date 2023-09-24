import { Flex, Image, Button, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import arrow from '../images/o_banking.svg'
import { HamburgerIcon } from "@chakra-ui/icons"

export const Menu = ({src}) => {
    return <Flex justifyContent='space-between' fontSize='18px' my={8}>
        <Flex gap='30px' alignItems='center' fontWeight='600'>
            <Image src={src} />
            <Link  to='/loan' >Loans</Link>
            <Link>Cards</Link>
            <Link>Deposits</Link>
            <Link>Cashback</Link>
        </Flex>
        <Flex gap='10px'>
            <Button bg='#FFC628' p='12px 22px' borderRadius='3xl' _hover={{ bg: '#000', color: '#fff' }}>
                <Image src={arrow} />
                <Text ml='10px'>Internet Bank</Text>
            </Button>
            <Button backgroundColor='transparent' border='1px solid rgba(0,0,0,0.1)' borderRadius='full' >
                <HamburgerIcon color='gray' fontSize='20px' />
            </Button>
        </Flex>

    </Flex>
}