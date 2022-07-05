import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Text,
    Flex
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BlockchainContext } from '../context/BlockchainContext'

const WithdrawForm = () => {
    const { withdrawOwnerBalance, checkOut } = useContext(BlockchainContext)
    return (
        <Flex justifyContent={'center'} alignItems={'center'} p={5} md={10}>
                <Button
                    onClick={withdrawOwnerBalance}
                    m={2}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    colorScheme={'teal'}
                    bg={'teal.500'}
                    _hover={{
                        bg: 'teal.300',
                    }}>
                    Withdraw
                </Button>
        </Flex>
    )
}

export default WithdrawForm