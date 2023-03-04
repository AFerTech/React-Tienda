import {createContext, useState} from 'react'
import { categorias as categoriasDB } from "../data/categorias"


const QuiscoContext = createContext();

const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal,setModal] = useState(false);
    const [producto,setProducto] = useState({});
    const [pedido, setPedido] = useState([]);


    const handleClickCategoria = id =>{
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }
    const handleClickModal = ()  => {
        setModal(!modal)
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }
    // aplica distroctory para no pasar categoria_id, del objeto producto
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
    }


    return(
        <QuiscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                setPedido,
                handleAgregarPedido

            }}

        >{children}</QuiscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuiscoContext