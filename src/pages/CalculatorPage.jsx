import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { LoanCalculator } from '../components/LoanCalculator'
import logo from '../images/logo-yelo.svg'


export const CalculatorPage = () => {
    return <Box>
        <Header color='gray' active='black' src={logo} />
        <LoanCalculator />
    </Box>

}