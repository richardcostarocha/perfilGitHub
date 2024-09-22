"use client"


import Perfil from "./componets/Perfil"
import { ItemProvider } from "./contexts/PerfilContext"

const page = () => {
  
  return (
    <>
    <ItemProvider>
      <Perfil/>
    </ItemProvider>      
    </>
  )
}

export default page
