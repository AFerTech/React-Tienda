import useQuiosco from "../hooks/useQuiosco"
export default function ModalProducto() {

    const {producto, handleClickModal} = useQuiosco();
  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <img 
            src={`img/${producto.imagen}.jpg`} 
            alt={`Imagen producto ${producto.nombre}`} />
        </div>
        <div className="md:w-1/3">
            <div className="justify-end flex">
                <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
