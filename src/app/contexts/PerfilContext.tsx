
import { createContext, ReactNode, useEffect, useState } from "react";

type item = {
    id: number;
    login: string;
    avatar_url: string;
    stargazers_count : number
}

type ListContextType = {
    item: item
    setItem: (item: item) => void
    setPesquisa: (pesquisa: string) => void
}



export const ItemContext =  createContext<ListContextType | null>(null);
export const ItemProvider = ({ children }: {children: ReactNode}) => {
    
    
    const [pesquisa, setPesquisa] = useState('');
  const [item, setItem] = useState({id: 0, login: '', avatar_url: '', stargazers_count: 0});
    
const getPerfil = async () => {
    const res = await fetch(`https://api.github.com/users/${pesquisa}`)
    const json = await res.json()
    const res1 = await fetch(`https://api.github.com/users/${pesquisa}/starred`)
        const json1 = await res1.json()
        let star = 0;
        for (let i = 0; i < json1.length; i++) {
            star += json1[i].stargazers_count
        }
        setItem({ id: json.id, login: json.login, avatar_url: json.avatar_url, stargazers_count: star});
        
  }
  useEffect(() =>{
    if(pesquisa) getPerfil();
  },[pesquisa]);
  
    return (
        <ItemContext.Provider value={{item, setItem, setPesquisa}}>
            {children}
        </ItemContext.Provider>
    )
}