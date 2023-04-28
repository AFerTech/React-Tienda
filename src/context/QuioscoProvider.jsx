import {createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import clienteAxios from '../config/axios';


const QuiscoContext = createContext();

const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal,setModal] = useState(false);
    const [producto,setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.count) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])


    const obtenerCategorias = async () => {
        try {

            const {data} = await clienteAxios('/api/categorias');
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        obtenerCategorias();
    }, [])


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
    const handleAgregarPedido = ({categoria_id,  ...producto}) => {

        // evita duplicar elementos en el pedido
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado= pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
           
            setPedido(pedidoActualizado)
            toast.success('Pedido Actualizado');
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido');
            

        }
    }
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    }
    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Eliminado del Pedido')
    }
    const handleSubmitNuevaOrden =  async (logout) =>{
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clienteAxios.post('/api/pedidos',
            {
                total,
                productos: pedido.map(producto => {
                    return {
                        id: producto.id,
                        cantidad: producto.count
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(data.message);
            setTimeout( () =>{
                setPedido([])
            }, 1000);

            // cerrar sesión
            setTimeout( () => {
                localStorage.removeItem('AUTH_TOKEN');
                logout();
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <QuiscoContext.Provider
            value={{
                categorias,
                setCategorias,
                categoriaActual,
                setCategoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                setPedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                setTotal,
                handleSubmitNuevaOrden

            }}

        >{children}</QuiscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuiscoContext