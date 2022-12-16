import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../api";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  isUserData: any,
  setUserData: (data: {}) => void
  setIsLoggedIn: (isLoggedIn: boolean)=> void
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [ isUserData, setUserData] = useState<any>({})


    const storage = getAllLocalStorage()
    
    useEffect(()=>{
      if(storage){
        const {login} = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    },[storage])

    useEffect(()=> {
      async function getData(){
        const data = await api;
        setUserData(data);
      }
      if(!getData){
        console.log('Problemas de API Error')
      }
    },[setUserData])

    const user='Mene'

  return <AppContext.Provider value={{ user,isLoggedIn,setIsLoggedIn,isUserData,setUserData}}>{children}</AppContext.Provider>;
};