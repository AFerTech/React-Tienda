import {createRef, useState} from 'react'
import { Link} from 'react-router-dom'
import clienteAxios from '../config/axios';

export default function Registro() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmRef = createRef();

  const [errores, setErrores] = useState([])

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   const datos = {
  //     name : nameRef.current.value,
  //     email : emailRef.current.value,
  //     password : passwordRef.current.value,
  //     password_confirmation: passwordConfirmRef.current.value
  //   }
  //   try {
  //       const respuesta = await clienteAxios.post('api/registro', datos)
  //       console.log(respuesta)
  //   } catch (error) {
  //       setErrores(Object.values(error.response.data.errors))
  //   }

  // }


  return (
    <>
    <h1 className="text-4xl font-black">Crear Cuenta</h1>
    <p>Crear Cuenta</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form 
            action=''
            onSubmit={handleSubmit}
            noValidate
        >
            {errores ? errores.map(error =>   <p>{error}</p>) : null }
            <div className="mb-4">
                <label htmlFor="name" className="text-slate-800">Nombre: </label>
                <input 
                    type="text"
                    id="name"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="name"
                    placeholder="Nombre"
                    ref={nameRef}
                     />
            </div>
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
            <div className="mb-4">
                <label htmlFor="password_confirmation" className="text-slate-800">Repetir Password: </label>
                <input 
                    type="password"
                    id="password_confirmation"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password_confirmation"
                    placeholder="Password"
                    ref={passwordConfirmRef}
                     />
            </div>
            <input 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
              name="" 
              id=""
              value="Crear Cuenta" 
            />

        </form>
    </div>
    <nav className="mt-5">
      <Link to="/auth/login">
        Iniciar Sesión
      </Link>
    </nav>
    </>
  )
}
