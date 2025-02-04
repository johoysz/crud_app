import { createBrowserRouter} from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import Pmethod from './views/payMethod';
//import ErrorPage from './views/ErrorPage';
import DefaultLayout from './assets/Components/DefaultLayout';
import GuestLayout from './assets/Components/GuestLayout';
import Users from './views/users';
import Details from './views/details';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/pMethod',
                element: <Pmethod />,
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register', 
                element: <Register />,
            },
        ]
    },
]);

export default router;