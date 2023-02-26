
export default function Login() {
  return (
    <>
    <h1 className="text-4xl font-black">Iniciar Sesión</h1>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
            <div className="mb-4">
                <label htmlFor="email" className="text-slate-800">Email: </label>
                <input 
                    type="text"
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="email"
                    placeholder="Email"
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
    </>
  )
}
