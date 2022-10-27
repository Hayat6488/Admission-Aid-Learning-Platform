import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Main from "../../LayOut/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import Faqs from "../../Pages/Faqs/Faqs";
import SubjectDetails from "../../Pages/SubjectDetails/SubjectDetails";
import Cards from "../../Pages/Cards/Cards";
import Error from "../../Pages/ErrorPage/Error";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Cards></Cards>
            },
            {
                path: '/courses',
                element: <Cards></Cards>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://admission-aid-server.vercel.app/subjects/${params.id}`),
                element: <SubjectDetails></SubjectDetails>
            },
            {
                path: '/courses/checkout/:id',
                loader: ({params}) => fetch(`https://admission-aid-server.vercel.app/subjects/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    },
    {
        path: '/FAQs',
        element: <Faqs></Faqs>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])