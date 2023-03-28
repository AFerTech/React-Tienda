import {createRef, useState} from 'react'
import { Link} from 'react-router-dom'
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';


export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email : emailRef.current.value,
      password : passwordRef.current.value,
    }
    
    try {
        const {data} = await clienteAxios.post('/api/login', datos)
        console.log(data.token)
    } catch (error) {
        setErrores(Object.values(error.response.data.errors))
        console.log(error)
    }

  }



  return (
    <>
    <h1 className="text-4xl font-black">Iniciar Sesión</h1>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form 
        onSubmit={handleSubmit}
        noValidate
        >
            {errores ? errores.map(( error,i) =>   <Alerta key={i}>{error}</Alerta> ) : null }

            <div className="mb-4">
                <label htmlFor="email" className="text-slate-800">Email: </label>
                <input 
                    type="text"
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                     />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="text-slate-800">Password: </label>
                <input 
                    type="password"
                    id="password"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                     />
            </div>
            
            <input 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            name="" 
            id=""
            value="Iniciar Sesión" />
        </form>
    </div>
    <nav className="mt-5">
      <Link to="/auth/registro">
        Crear una cuenta
      </Link>
    </nav>
    </>
  )
}
