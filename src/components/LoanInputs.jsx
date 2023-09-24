import { Flex, Input, Text, Select, Link as ChakraLink, Icon, Button } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { BiSolidCheckShield } from "react-icons/bi";
import { useState } from "react"

export const LoanInputs = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        surname: '',
        date: '',
        currentAdress: '',
        registrationAdress: '',
        salary: '',
        workplace: '',
        phone: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)


    const changeInputValue = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const checkFormValidity = () => {
        const isEmptyInput = Object.values(inputValues).some(value => value === '')
        setIsFormValid(!isEmptyInput)
    }

    return <>
        <Flex direction='column' gap='20px'>
            <Flex border='1px solid gray' borderRadius='lg' justifyContent='space-between'>
                <Input w='33.3%' p={3} placeholder="Name" value={inputValues.name} name="name" onChange={changeInputValue} onBlur={checkFormValidity} border='none' variant='unstyled' borderRight='1px solid gray' borderRadius={0} />
                <Input w='33.3%' p={3} placeholder="Surname" value={inputValues.surname} name="surname" onChange={changeInputValue} onBlur={checkFormValidity} border='none' variant='unstyled' borderRight='1px solid gray' borderRadius={0} />
                <Input w='33.3%' p={3} placeholder="Date of birth" value={inputValues.date} name="date" onChange={changeInputValue} onBlur={checkFormValidity} border='none' variant='unstyled' borderRadius={0} />
            </Flex>
            <Flex justifyContent='space-between'>
                <Input w='48%' border='1px solid gray' borderRadius='lg' p={3} placeholder="Current adress" value={inputValues.currentAdress} onBlur={checkFormValidity} name="currentAdress" onChange={changeInputValue} variant='unstyled' />
                <Input w='48%' border='1px solid gray' p={3} borderRadius='lg' placeholder="Registration adress" value={inputValues.registrationAdress} onBlur={checkFormValidity} name="registrationAdress" onChange={changeInputValue} variant='unstyled' />
            </Flex>
            <Flex justifyContent='space-between' gap='20px'>
                <Input p={3} placeholder="Salary" value={inputValues.salary} name="salary" onChange={changeInputValue} onBlur={checkFormValidity} border='1px solid gray' variant='unstyled' borderRadius='lg' />
                <Input p={3} placeholder="Workplace" value={inputValues.workplace} name="workplace" onChange={changeInputValue} onBlur={checkFormValidity} border='1px solid gray' variant='unstyled' borderRadius='lg' />
            </Flex>
            <Flex justifyContent='space-between' alignItems='center'>
                <Select placeholder='Operator' w='20%' size='lg' border='1px solid gray' outline='none'>
                    <option value='option1'>050</option>
                    <option value='option2'>051</option>
                    <option value='option3'>055</option>
                    <option value='option3'>070</option>
                    <option value='option3'>077</option>
                </Select>
                <Input w='77%' p={3} placeholder="Phone number" value={inputValues.phone} name="phone" onChange={changeInputValue} onBlur={checkFormValidity} border='1px solid gray' variant='unstyled' borderRadius='lg' />
            </Flex>
        </Flex>
        <Text backgroundColor='gray' w='100%' h='1px' my={10}></Text>
        <Flex justifyContent='space-around'>
            <Flex w='50%' alignItems='center' gap='10px'>
                <Icon as={BiSolidCheckShield} color='green' fontSize='25px' />
                <Text fontSize='14px'>We guarantee the safety and security of your data</Text>
            </Flex>
            <Button disabled={!isFormValid} w='35%' display='flex' alignItems='center' justifyContent='center' fontSize={18} fontWeight={500} bg='#ffc628' p='28px 10px' borderRadius='xl'><ChakraLink as={ReactRouterLink} to="/success-loan" _hover={{ textDecoration: 'none' }}>Next step</ChakraLink>
            </Button>
        </Flex>
    </>
}