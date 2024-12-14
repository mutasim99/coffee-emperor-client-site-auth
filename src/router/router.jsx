import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layoutss/HomeLayouts';
import AddCoffee from '../Components/AddCoffee';
import CoffeCard from '../Components/CoffeCard';
import UpdatedCoffe from '../Components/UpdatedCoffe';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Users from '../Components/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/',
                element: <CoffeCard></CoffeCard>,
                loader: () => fetch('https://coffe-emperior-server-site.vercel.app/coffe')
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://coffe-emperior-server-site.vercel.app/users')
            },
            {
                path: '/update/:id',
                element: <UpdatedCoffe></UpdatedCoffe>,
                loader: ({ params }) => fetch(`https://coffe-emperior-server-site.vercel.app/coffe/${params.id}`)
            },

        ]
    },

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default router;