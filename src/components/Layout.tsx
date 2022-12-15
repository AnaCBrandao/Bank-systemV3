import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import '../App.css'

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      <Box minHeight='100vh' backgroundColor='gray.900' className='container'>       
        { children }
      </Box>
    </>
  )
}
