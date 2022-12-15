import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

import './Header.css'
import logo from '../logo.png'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false, email: '', senha: ''})
    setIsLoggedIn(false)
    navigate('/')
  }

  console.log(localStorage)

  return(
    <div className='header'>
      <img src={logo} className='logo'/>
      Bank System
    
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
              colorScheme="yellow"
            >
              Sair
            </Button>
          </>
        )
      }
    </div>
    
  )
}
