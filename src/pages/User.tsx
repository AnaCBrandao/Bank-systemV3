import { Box, Center, Spinner,} from "@chakra-ui/react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo"

const User = () => {

    const { isLoggedIn, isUserData } = useContext(AppContext);
    const navigate = useNavigate();

    if (!isLoggedIn || !isUserData) {
        navigate("/");
      }

    console.log(isUserData.email)
    console.log(isUserData)

    return(
        <Box backgroundColor={'gray.900'} minH={'100vh'}>
            <Box padding={'10px'}>
                <Center>
                {isUserData.email === undefined || isUserData === null ? (
            <Center>
              <Spinner size="xl" color="white"></Spinner>
            </Center>
          ) : (
                    <CardInfo content={isUserData.email} mainContent={isUserData.name}/>)}
                </Center>
            </Box>
        </Box>
    )
}

export default User