import { BusinessLoansForm } from "../components/BusinessLoansForm"
import { Header } from "../components/Header"
import { Box } from "@chakra-ui/react"
import logoWhite from '../images/logo_white.svg'

export const BusinessLoansPage = () => {
    return <Box bgColor='blue.900' color='#fff'>
        <Header color='#fff' active='black' src={logoWhite}/>
        <BusinessLoansForm />
    </Box>
}