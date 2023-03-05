import { formatearPrecio } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
  const {pedido, total} = useQuiosco();

  const comprobarPedido = () => pedido.length === 0 ;

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5 text-center'>
      <h1 className="text-3xl font-black ">
        Pedido
      </h1>
      <p className="text-lg my-5">
        Resumen del pedido
      </p>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-2xl">No hay productos en el pedido</p>
        ) : (
          pedido.map(producto =>(
            <ResumenProducto 
            key={producto.id}
            producto={producto}
            />
          ))
        )}
      </div>

      <p className="text-1xl mt-10 text-left">Total: {''}
            {formatearPrecio(total)}
      </p>
      <form action="" className="w-full">
          <div className="mt-5">
            <input 
            type="submit" 
            className={`${comprobarPedido()? 'bg-indigo-100' :'bg-indigo-600 hover:bg-indigo-800'} 
            px-5 py-2 rounded uppercase font-bold text-white w-full`}
            disabled={comprobarPedido()}
            />
          </div>
      </form>
    </aside>
  )
}
