import { createBrowserRouter} from 'react-router-dom';
import Register from './views/register';
//import ErrorPage from './views/ErrorPage';
import DefaultLayout from './assets/Components/DefaultLayout';
import GuestLayout from './assets/Components/GuestLayout';

import Details from './views/PersonalDetails';
import PayMethod from './views/PayMethod';
//import Users from './views/users';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/PersonalDetails',
                element: <Details />
            },
            {
                path: '/PayMethod',
                element: <PayMethod />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/register', 
                element: <Register />,
            },
        ]
    },
]);

export default router;