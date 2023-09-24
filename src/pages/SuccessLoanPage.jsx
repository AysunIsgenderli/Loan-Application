import { Box, Flex, Heading, Image,Text } from "@chakra-ui/react"
import { Header } from "../components/Header"
import successLetterPic from '../images/success_letter_icon.svg'
export const SuccessLoanPage = () => {
    return <Box>
        <Header />
        <Flex direction='column' maxW='40%' m='0 auto' alignItems='center' gap={5}>
            <Heading>Təşəkkür edirik!</Heading>
            <Text>Ən qısa zamanda əməkdaşlarımız tərəfindən sizin sorğunuza baxılacaq.</Text>
            <Image src={successLetterPic} w='40px' h='40px' />
        </Flex>
    </Box>
}