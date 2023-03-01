import {createContext, useState} from 'react'
import { categorias as categoriasDB } from "../data/categorias"


const QuiscoContext = createContext();

const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(categoriasDB);

    return(
        <QuiscoContext.Provider
            value={{
                categorias
            }}

        >{children}</QuiscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuiscoContext