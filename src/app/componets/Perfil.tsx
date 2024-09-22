import { useContext, useState } from "react";
import { ItemContext } from "../contexts/PerfilContext";

const Perfil = () => {
    const perfilctx = useContext(ItemContext);
    const [addField, setAddField] = useState('');
  console.log(perfilctx?.item)
  const handleClick = () => {
    if(addField.trim() === '') return;
    if(addField.trim() !== perfilctx?.item.login){ 
      perfilctx?.setPesquisa(addField.trim());
    }
    setAddField('');
}

  return (
    <>
    <div className="flex ">
    <div className="conteiner mx-auto bg-[#013952] max-h-[680px] max-w-[460px] min-h-[680px] min-w-[460px]">
      <h1 className="text-center text-4xl my-4">Pesquisar Perfil</h1>
      <div className="max-w-2xl mx-auto flex rounded-md border bg-[#276C64] border-gray-400 p-4 m-4">
        <input 
          type="text" 
          className="flex-1 rounded-md border border-white p-3 bg-transparent text-white outline-none"
          placeholder="Digite uma tarefa"
          value={addField}
          onChange={e => setAddField(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleClick(); }}
        />
        <button className="mx-4 bg-[#61A391] border-gray-800 border rounded p-3" onClick={handleClick}>ADICIONAR</button> 
      </div>
      {perfilctx?.item.login !== '' ?
        <div className="container mx-auto">
          <img 
          src={perfilctx?.item.avatar_url}
          className="mx-auto"
           />
          <p className=" text-center">Nome: {perfilctx?.item.login}  </p>
          <p className=" text-center">Numeros de estrelas: {perfilctx?.item.stargazers_count}</p>
        </div>: <div className="h-96"></div> 
      } 
    </div>
    </div>
    </>
  )
}

export default Perfil
