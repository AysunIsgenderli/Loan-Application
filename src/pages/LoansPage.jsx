import { Flex, Box, Heading, Text } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import loanCards from '../data/loanCards.json'
import logo from '../images/logo-yelo.svg'


export const LoansPage = () => {
    return <Box>
        <Header color='gray' active='black' src={logo}/>
        <Flex direction='column' w='80%' m='0 auto' py={10}>
            <Flex direction='column' textAlign='center' my={20}>
                <Heading fontWeight={600} fontSize={45} mb={5}>Loans</Heading>
                <Text color='gray' fontSize={18}>Don't postpone your expenses, there is always Yelo Bank for support.</Text>
            </Flex>
            <Flex direction='column' gap={10} justifyContent='space-between'                                                                            >
                {
                    loanCards.map((loanCard) => <Card {...loanCard} />)
                }
            </Flex>
        </Flex>
    </Box>
}