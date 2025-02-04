import { createBrowserRouter} from 'react-router-dom';
import Login from './views/login';
import PayMethod from './views/pMethod'
import Register from './views/register';
import Ewallet from './views/ewallet';
import Details from './views/details';
//import ErrorPage from './views/ErrorPage';
import DefaultLayout from './assets/Components/DefaultLayout';
import GuestLayout from './assets/Components/GuestLayout';
//import Users from './views/users';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/pMethod',
                element: <PayMethod /> //follow the variable name used
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/ewallet',
                element: <Ewallet />
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