import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Main from "../../LayOut/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import Faqs from "../../Pages/Faqs/Faqs";
import SubjectDetails from "../../Pages/SubjectDetails/SubjectDetails";
import Cards from "../../Pages/Cards/Cards";
import Error from "../../Pages/ErrorPage/Error";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
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
                element: <CheckOut></CheckOut>
            },
            {
                path: '*',
                element: <Error></Error>
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
    }
])