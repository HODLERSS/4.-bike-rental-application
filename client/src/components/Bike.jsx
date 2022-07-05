import {Button,Box, Image, Text, Stack} from "@chakra-ui/react"
import { BlockchainContext } from "../context/BlockchainContext"
import { useContext } from 'react'

const Bike = ({ bike }) => {
    const {checkOut, checkIn} = useContext(BlockchainContext)
    return (
        <Box boxSize='lg' mx={2}>
            <Image src={bike} mb={10} />
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Stack spacing={0} direction={'row'} align={'center'} justify={'center'} mt={5}>
                <Button
                    onClick={checkOut}
                    m={2}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    colorScheme={'teal'}
                    bg={'teal.500'}
                    _hover={{
                        bg: 'teal.300',
                    }}>
                    Check Out
                </Button>
                <Button
                    onClick={checkIn}
                    m={2}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    colorScheme={'teal'}
                    bg={'teal.500'}
                    _hover={{
                        bg: 'teal.300',
                    }}>
                    Check In
                </Button>
            </Stack>
        </Box> 
    )
}

export default Bike