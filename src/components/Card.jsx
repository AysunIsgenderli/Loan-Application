import { Box, Flex, Text, Icon, Button, Image, Link } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs";
// import consumerLoanPic from '../images/consumer-loan-pic.webp'
import yeloBlock from '../images/yelo_block.svg'
import { Link as RouterLink } from "react-router-dom";


export const Card = ({ link, loan, amount, term, rate, imageUrl, profit, title1, title2, title3 }) => <Box border='1px solid rgba(0,0,0,0.2)' borderRadius='xl' cursor='pointer'>
    <Flex justifyContent='space-between' key={amount}>
        <Flex direction='column' w='48%' p='40px 30px 20px 30px'>
            <Text fontSize={40} fontWeight={500} color='black'>{loan}</Text>
            <Text color='gray' mb={10}>{profit}</Text>
            <Flex justifyContent='space-between' gap='15px'>
                <Flex direction='column' gap='2px'>
                    <Text color='gray' fontSize='14px'>{title1}</Text>
                    <Text color='black' fontSize={20} fontWeight={600}>{amount}</Text>
                </Flex>
                <Flex direction='column' gap='2px'>
                    <Text color='gray' fontSize='14px'>{title2}</Text>
                    <Text color='black' fontSize={20} fontWeight={600}>{term}</Text>
                </Flex>
                <Flex direction='column' gap='2px'>
                    <Text color='gray' fontSize='14px'>{title3}</Text>
                    <Text color='black' fontSize={20} fontWeight={600}>{rate}</Text>
                </Flex>
            </Flex>
            <Flex justifyContent='space-between' gap={10} h='60px' w='100%' mt={65}>
                <Link as={RouterLink} to={`/loan/${link}`} w='48%' bgColor='black' display='flex' alignItems='center' justifyContent='center' color="#fff" fontSize="xl" fontWeight={500} _hover={{textDecoration:'none', bgColor:'#ffc628', color:'black'}} ><Text title="business-loan" fontSize='18px'>Order</Text></Link>
                <Button h='100%' w='48%' bg='transparent' color='gray' fontSize='18px' _hover={{ bgColor: 'transparent', color: '#000' }}><Text mr={3}>Learn more</Text><Icon as={BsArrowRight} /></Button>
            </Flex>
        </Flex>
        <Box borderTopRightRadius='xl' borderBottomRightRadius='xl' backgroundImage={yeloBlock} bgSize='275%' bgRepeat='no-repeat' w='48%' h='110%'>
            <Image src={imageUrl} w='100%' backgroundSize='contain' />
        </Box>
    </Flex>
</Box>