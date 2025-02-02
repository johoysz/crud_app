import { createBrowserRouter} from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
//import ErrorPage from './views/ErrorPage';
import DefaultLayout from './assets/Components/DefaultLayout';
import GuestLayout from './assets/Components/GuestLayout';
import Users from './views/users';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <Users />
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