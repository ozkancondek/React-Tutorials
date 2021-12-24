import { createContext } from "react";
import { initialServices } from "../services/api";
import { useErrorHandler } from 'react-error-boundary'
export const ApiContext=createContext()


export const ApiProvider=({children})=>{
  const handleError=useErrorHandler()

    const asyncWrapper = async (cb) => {
        try {
           let res= await cb()
           return res
        } catch (error) {
          handleError(error)
        }
      };
      
    const getPost=async (id)=>{
       let res=await asyncWrapper(()=>initialServices.fetchData(id))
       return res
    }

    return (<ApiContext.Provider value={{getPost:getPost}}>{children}</ApiContext.Provider>)
}