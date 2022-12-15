import { Box, Center,  Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const ContaInfo = () => { 
    const dioBank = localStorage.getItem('diobank');

    console.log()

    return ( 
        <>
            <Center>
                <Box marginTop="30px" backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" >
                    <Text fontSize='3xl' fontWeight='bold'>
                        Informações da conta
                    </Text>
                    <Link to='/conta/1'>
                        <Text fontSize='xl'  >
                            Conta
                        </Text>
                    </Link>
                    <a href='/conta/1'>
                        Link com tag a
                    </a>
                </Box>
            </Center>
        </>
    )
}

export default ContaInfo
