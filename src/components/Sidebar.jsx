import Categoria from "./Categoria"
import { categorias } from "../data/categorias"

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
        <div className="p-4">
            <img 
            src="img/logo.svg"
            alt="Logo" 
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria =>(
                <Categoria
                    categoria = {categoria}
                />
            ))}
        </div>
    </aside>
  )
}
