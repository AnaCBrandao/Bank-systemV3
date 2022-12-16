import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ senha, setSenha ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const storage = getAllLocalStorage()
    
    useEffect(()=>{
        if(storage){
        const {login} = JSON.parse(storage)
        if(login === true)navigate('/conta/1')
        }
    }, [navigate, storage])

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha)

        if(!loggedIn){
            return alert('Email ou senha inválidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true, email: email ,senha: senha})
        navigate('/conta/1')
    }

    return (     
        <Center>
            <Box padding="25px" marginTop='30px'> 
                <Card>                 
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input 
                        placeholder="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        isInvalid errorBorderColor='gray.400'
                        marginTop="20px"
                    />
                    <Input 
                        placeholder="password" 
                        type='password'
                        value={senha} 
                        onChange={(event) => setSenha(event.target.value)}
                        isInvalid errorBorderColor='gray.400'
                        marginTop="10px"
                    />
                    <Center>
                        <DButton
                            onClick={() => validateUser(email, senha)}
                        />
                    </Center>
                </Card>
            </Box>
        </Center>
    );
}

export default Home;
