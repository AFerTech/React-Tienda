import {createBrowserRouter} from  'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/Auth.layout'
import Inicio from './views/inicio'
import Login from './views/login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        childre: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
])

export default router