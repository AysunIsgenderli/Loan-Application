import {
    Flex, Text, Input, Box, Select, Textarea, Button, Icon, Image
} from "@chakra-ui/react"
import { AiFillInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react"
import clientData from '../data/customerFinCode.json'
import { Slider } from "./Slider"
import finImage from '../images/fin_code.webp'
import { useNavigate } from "react-router-dom";
import { Guarantors } from "./Guarantors";

export const BusinessLoansForm = () => {
    const navigate = useNavigate()
    const [loanInfo, setLoanInfo] = useState({
        term: 30,
        interest: 12,
        amount: 500000
    })
    const [inputValues, setInputValues] = useState({
        name: '',
        surname: '',
        patronymic: '',
        id: '',
        businessAdress: '',
        registrationAdress: '',
        currentAdress: '',
        city: '',
        workExperienceYear: '',
        workExperienceMonth: ''
    })

    const [showId, setShowId] = useState(false)
    const [showFin, setShowFin] = useState(false)

    const [finCode, setFinCode] = useState('')
    const [message, setMessage] = useState(null)
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        const savedInputValues = localStorage.getItem('inputValues')
        if (savedInputValues) {
            setInputValues(JSON.parse(savedInputValues))
        }

    }, [])

    const saveToLocalStorage = () => {
        localStorage.setItem('inputValues', JSON.stringify(inputValues))
    }



    const handleInputValueChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
        saveToLocalStorage()

    }

    const updateLoanInfo = (value, type) => {
        setLoanInfo((prevState) => ({
            ...prevState,
            [type]: value
        }))
        saveToLocalStorage()
    }

    const handleShowId = () => {
        setShowId(!showId)
    }
    const handleShowFin = () => {
        setShowFin(!showFin)
    }


    const checkFinCode = (fin) => {
        const existFinCode = clientData.some(client => client.finCode === fin)
        if (existFinCode) {
            setMessage('This client exist in the system')
        }
        saveToLocalStorage()
    }

    const finCodeChangeHandler = (e) => {
        setFinCode(e.target.value)
        checkFinCode(e.target.value)
        saveToLocalStorage()
    }

    const checkFormValidity = () => {
        const isEmptyInput = Object.values(inputValues).some(value => value === '')
        setIsFormValid(!isEmptyInput)
        saveToLocalStorage()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/success-loan')
        saveToLocalStorage()
    }




    return (
        <Box >
            <Flex maxW='60%' m='0 auto' direction='column' p={10} gap={5}>
                <Flex direction='column' w='100%' alignItems='flex-start' p={2} bgColor='blue.800' borderRadius='lg'>
                    <Text color='gray.500' fontSize={14}>Amount</Text>
                    <Input value={`${loanInfo.amount} AZN`} mb='3' border='none' variant='unstyled' fontWeight={600} fontSize={20} />
                    <Slider value={loanInfo.amount} min={500} max={1000000} onChange={(e) => { updateLoanInfo(e.target.value, 'amount') }} />
                </Flex>
                <Flex justifyContent='space-between'>
                    <Flex direction='column' w='48%' alignItems='flex-start' p={2} bgColor='blue.800' borderRadius='lg'>
                        <Text color='gray.500' fontSize={14}>Term</Text>
                        <Flex justifyContent='space-between' alignItems='center' mb={3}>
                            <Input value={`${loanInfo.term} Month`} border='none' variant='unstyled' fontWeight={600} fontSize={20} />
                        </Flex>
                        <Slider value={loanInfo.term} min={6} max={60} onChange={(e) => { updateLoanInfo(e.target.value, 'term') }} />
                    </Flex>
                    <Flex direction='column' w='48%' alignItems='flex-start' p={2} bgColor='blue.800' borderRadius='lg'>
                        <Text color='gray.500' fontSize={14}>Interest rate</Text>
                        <Flex alignItems='center' mb={3}>
                            <Input value={`${loanInfo.interest}%`} border='none' variant='unstyled' fontWeight={600} fontSize={20} />
                        </Flex>
                        <Slider value={loanInfo.interest} min={5} max={25} onChange={(e) => { updateLoanInfo(e.target.value, 'interest') }} />
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' h='60px' gap={3}>
                    <Input placeholder='Name' value={inputValues.name} name="name" onChange={handleInputValueChange} onBlur={checkFormValidity} p={2} variant='unstyled' bgColor='blue.800' />
                    <Input placeholder='Surname' value={inputValues.surname} name="surname" onChange={handleInputValueChange} onBlur={checkFormValidity} p={2} variant='unstyled' bgColor='blue.800' />
                    <Input placeholder='Patronymic' value={inputValues.patronymic} name="patronymic" onChange={handleInputValueChange} onBlur={checkFormValidity} p={2} variant='unstyled' bgColor='blue.800' />
                </Flex>
                <Flex justifyContent='space-between' h='60px'>
                    <Flex bgColor='blue.800' alignItems='center' position='relative' borderRadius='lg' w='49%' p={2}>
                        <Input placeholder='ID no' value={inputValues.id} name="id" onChange={handleInputValueChange} onBlur={checkFormValidity} variant='unstyled' />
                        <Button onClick={handleShowId} p={2} bgColor='transparent' _hover={{ bgColor: "transparent" }}><Icon as={AiFillInfoCircle} fontSize={24} color='blue.200' /></Button>
                        {showId && <Image src={finImage} position='absolute' top='80%' right='10%' zIndex={1} />}
                    </Flex>
                    <Flex alignItems='center' position='relative' w='49%' bgColor='blue.800' borderRadius='lg' p={2}>
                        <Input placeholder='Fin' value={finCode} onChange={finCodeChangeHandler} onBlur={checkFormValidity} variant='unstyled' />
                        <Button onClick={handleShowFin} p={2} bgColor='transparent' _hover={{ bgColor: "transparent" }}><Icon as={AiFillInfoCircle} fontSize={24} color='blue.200' /></Button>
                        {showFin && <Image src={finImage} position='absolute' bottom='80%' left='10%' />}
                    </Flex>
                    {message && <Text color='red' position='absolute' right='23%' top='54%'>{message}</Text>}

                </Flex>
                <Flex justifyContent='space-between' alignItems='center' h='60px' w='100%' >
                    <Input placeholder="Business adress" value={inputValues.businessAdress} onBlur={checkFormValidity} name="businessAdress" onChange={handleInputValueChange} bgColor='blue.800' h='60px' w='49%' p={2} variant='unstyled' borderRadius='lg' />
                    <Select placeholder='Field of work' color='gray' h='60px' w='49%' bgColor='blue.800' variant='unstyled'>
                        <option value='option1'>Trade</option>
                        <option value='option2'>Service</option>
                        <option value='option3'>Production</option>
                        <option value='option3'>Construction</option>
                        <option value='option3'>Agro</option>
                        <option value='option3'>Transport</option>
                    </Select>
                </Flex>
                <Flex justifyContent='space-between' h='60px' gap={3}>
                    <Input placeholder='Registration adress' value={inputValues.registrationAdress} onBlur={checkFormValidity} name="registrationAdress" onChange={handleInputValueChange} p={2} variant='unstyled' bgColor='blue.800' />
                    <Input placeholder='Current adress' value={inputValues.currentAdress} onBlur={checkFormValidity} name="currentAdress" onChange={handleInputValueChange} p={2} variant='unstyled' bgColor='blue.800' />
                </Flex>
                <Flex justifyContent='space-between' h='60px' gap={3}>
                    <Input placeholder='City' value={inputValues.city} name="city" onChange={handleInputValueChange} onBlur={checkFormValidity} p={2} variant='unstyled' bgColor='blue.800' />
                    <Input placeholder='Work experience (year)' value={inputValues.workExperienceYear} name="workExperienceYear" onChange={handleInputValueChange} onBlur={checkFormValidity} p={2} variant='unstyled' bgColor='blue.800' />
                    <Input placeholder='Work experience (month)' value={inputValues.workExperienceMonth} name="workExperienceMonth" onChange={handleInputValueChange} p={2} onBlur={checkFormValidity} variant='unstyled' bgColor='blue.800' />
                </Flex>
                <Guarantors />
                <Textarea placeholder='The purpose of the business loan' />
                <Button disabled={!isFormValid} onClick={isFormValid && handleSubmit} p={7} bgColor='#ffc628' color='black'>Submit</Button>
            </Flex>
        </Box >
    )

}