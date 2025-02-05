import { createBrowserRouter} from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
//import ErrorPage from './views/ErrorPage';
import DefaultLayout from './assets/Components/DefaultLayout';
import GuestLayout from './assets/Components/GuestLayout';

import Details from './views/details';
import PayMethod from './views/payMethod';
//import Users from './views/users';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/payMethod',
                element: <PayMethod /> //follow the variable name used
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/payMethod',
                element: <PayMethod />
            },
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