import {
    Box, Button, Flex, Heading, Icon, Input, Text, Table, Select,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Link as ChakraLink
} from "@chakra-ui/react"
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { Slider } from "./Slider";
import { useState } from "react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { LoanInputs } from "./LoanInputs";

export const LoanCalculator = () => {
    const [loanInfo, setLoanInfo] = useState({
        term: 12,
        interest: 11.7,
        amount: 10000,
        loanAmountWithInterest: 0
    })
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [showPaymentSchedule, setShowPaymentSchedule] = useState(false)
    const rows = []

    const updateLoanInfo = (value, type) => {
        setLoanInfo((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    const calculateMonthlyPayment = () => {
        let loanAmount = +(loanInfo.amount)
        let loanTerm = +(loanInfo.term)
        let loanInterest = +(loanInfo.interest / 12 / 100)
        console.log({ loanInfo });
        if (loanAmount && loanTerm && loanInterest) {
            let monthlyPayment = loanAmount * (loanInterest * Math.pow(1 + loanInterest, loanTerm)) / (Math.pow(1 + loanInterest, loanTerm) - 1);
            if (monthlyPayment > loanAmount) {
                monthlyPayment = loanAmount
            }
            setLoanInfo(prevState => ({ ...prevState, loanAmountWithInterest: monthlyPayment * loanTerm }))
            setMonthlyPayment(monthlyPayment.toFixed(2))
        }
    }

    const renderPaymentSchedule = () => {
        console.log({ l: loanInfo.loanAmountWithInterest })
        let loanAmount = parseFloat(loanInfo.loanAmountWithInterest)
        const loanTerm = parseFloat(loanInfo.term)
        const loanInterest = parseFloat(loanInfo.interest / (12 * 100))
        const schedule = Array(loanTerm).map((payment) => {
            console.log({ payment });
        })
        let remainingPrincipal = loanAmount;
        for (let i = 0; i < loanTerm; i++) {

            let interestPayment = Number((loanAmount * loanInterest).toFixed(2));

            const principalPayment = remainingPrincipal < monthlyPayment ? +(remainingPrincipal - interestPayment).toFixed(2) : +(monthlyPayment - interestPayment).toFixed(2)
            const monthlyPaymentDisplay = (remainingPrincipal < monthlyPayment ? remainingPrincipal : principalPayment + interestPayment).toFixed(2)
            remainingPrincipal = +(remainingPrincipal - monthlyPaymentDisplay).toFixed(2);

            rows.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{monthlyPaymentDisplay} AZN</td>
                    <td>{interestPayment} AZN</td>
                    <td>{principalPayment} AZN</td>
                    <td>{remainingPrincipal} AZN</td>
                </tr>
            )
            loanAmount = remainingPrincipal
        }


        const removeSchedule = () => {
            setShowPaymentSchedule(false)
        }

        return (
            <TableContainer mb={10} border='1px solid rgba(0,0,0,0.2)' p={2}>
                <Flex justifyContent='flex-end'><Button onClick={removeSchedule} bgColor='#ffc628' _hover={{ bgColor: "#ffc628" }}><SmallCloseIcon fontSize={20} /></Button></Flex>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Month</Th>
                            <Th>Monthly Payment</Th>
                            <Th>Interest</Th>
                            <Th>Principial</Th>
                            <Th>Remaining Balance</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {rows}
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }



    return <Flex direction='column' w='70%' m='0 auto' py={10} alignItems='center' gap='30px'>
        <Heading fontSize='25px' fontWeight='600'>Loan Calculator</Heading>
        <Flex justifyContent='space-between' w='100%' h='60px' border='1px solid gray' borderRadius='lg' >
            <ChakraLink as={ReactRouterLink} display='flex' alignItems='center' justifyContent='center' borderRadius={0} borderTopLeftRadius='lg' borderBottomLeftRadius='lg' p={7} w='33.1%' bg='#FFC628' border='none' fontWeight={700} fontSize={18} _hover={{ bg: '#ffc628' }}>Cash loan</ChakraLink>
            <ChakraLink as={ReactRouterLink} display='flex' alignItems='center' justifyContent='center' borderRadius={0} p={7} fontWeight={700} fontSize={18} w='33.1%' bg='transparent' _hover={{ bg: '#ffc628' }}>Mortgage</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/loan/business-loan' display='flex' alignItems='center' justifyContent='center' borderRadius={0} borderTopRightRadius='lg' borderBottomRightRadius='lg' fontWeight={700} fontSize={18} w='33.1%' bg='transparent' _hover={{ bg: '#ffc628' }}>Business loan</ChakraLink>
        </Flex>
        <Text fontSize='25px' fontWeight='600'>It is very easy to apply for a loan online</Text>
        <Flex w='100%' justifyContent='space-around' position='relative'>
            <Flex direction='column' alignItems='center' gap={5} w='30%'>
                <Button w={20} height={20} borderRadius='50%' bg='#ffc628' fontSize={20}>1</Button>
                <Text color='gray'>Fill out an online order from</Text>
            </Flex>
            <Flex direction='column' alignItems='center' gap={5} w='30%'>
                <Button w={20} height={20} borderRadius='50%' bg='#ffc628' fontSize={20}>2</Button>
                <Text color='gray'>Get a confirmation</Text>
            </Flex>
            <Flex direction='column' alignItems='center' gap={5} w='30%'>
                <Button w={20} height={20} borderRadius='50%' bg='#ffc628' fontSize={20}>3</Button>
                <Text color='gray'>Take a loan</Text>
            </Flex>
            <Text bgColor='rgba(0,0,0,0.2)' w='22%' h='1px' position='absolute' top='30%' left='22%'></Text>
            <Text bgColor='rgba(0,0,0,0.2)' w='22%' h='1px' position='absolute' top='30%' right='22%'></Text>

        </Flex>
        <Box w='80%' m='0 auto' border='1px solid' py={5} >
            <Text textAlign='center' fontSize='25px' fontWeight='600'>Order commission free loan</Text>
            <Flex w='90%' m='0 auto' direction='column' mt={5}>
                <Flex w='100%' border='1px solid gray' borderTopLeftRadius='lg' borderTopRightRadius='lg'>
                    <Flex direction='column' w='33.3%' alignItems='flex-start' p={2} borderRight='1px solid gray'>
                        <Text color='gray' fontSize={14}>Amount of loan</Text>
                        <Flex justifyContent='space-between' alignItems='center' mb={3}>
                            <Input value={loanInfo.amount} border='none' variant='unstyled' fontWeight={600} fontSize={25} color='black' />
                            <Text fontWeight={600} color='gray'>AZN</Text>
                        </Flex>
                        <Slider value={loanInfo.amount} min={300} max={50000} onChange={(e) => { updateLoanInfo(e.target.value, 'amount') }} />
                    </Flex>
                    <Flex direction='column' w='33.3%' alignItems='flex-start' p={2} borderRight='1px solid gray'>
                        <Text color='gray' fontSize={14}>Credit term</Text>
                        <Flex justifyContent='space-between' alignItems='center' mb={3}>
                            <Input value={loanInfo.term} border='none' variant='unstyled' fontWeight={600} fontSize={25} color='black' />
                            <Text fontWeight={600} color='gray'>MONTH</Text>
                        </Flex>
                        <Slider value={loanInfo.term} min={6} max={59} onChange={(e) => { updateLoanInfo(e.target.value, 'term') }} />
                    </Flex>
                    <Flex direction='column' w='33.3%' alignItems='flex-start' p={2}>
                        <Text color='gray' fontSize={14}>Interest</Text>
                        <Flex justifyContent='space-between' alignItems='center' mb={3}>
                            <Input value={+loanInfo.interest} border='none' variant='unstyled' fontWeight={600} fontSize={25} color='black' />
                            <Text fontWeight={600} color='gray'>%</Text>
                        </Flex>
                        <Slider value={loanInfo.interest} min={11.7} max={20} onChange={(e) => { updateLoanInfo(e.target.value, 'interest') }} />
                    </Flex>
                </Flex>
                <Button onClick={calculateMonthlyPayment} margin='20px 0' color='#fff' fontSize={17} fontWeight={600} _hover={{ bgColor: '#ffc628' }} bgColor='#ffc628' textAlign='center'>Calculate monthly payment</Button>
                <Flex alignItems='center' gap={2} mb={30} fontSize={18} >Monthly payment: <Text fontSize={20} fontWeight={700}>{monthlyPayment}</Text></Flex>
                <Button w='30%' mb={10} bgColor='black' color='#fff' isDisabled={monthlyPayment === 0} onClick={() => setShowPaymentSchedule(renderPaymentSchedule)} _hover={{ bgColor: 'black' }} >Show payment schedule</Button>
                {showPaymentSchedule && renderPaymentSchedule()}
                {/* inputs to fill */}
                <LoanInputs />
            </Flex>
        </Box>
    </Flex>
}