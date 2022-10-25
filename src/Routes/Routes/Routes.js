import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import Faqs from "../../Pages/Faqs/Faqs";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/FAQs',
                element: <Faqs></Faqs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])