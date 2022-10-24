import {
    createBrowserRouter,
    
  } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Faq from '../components/FAQ/Faq';
import Courses from '../components/shared/Courses/Courses';
// import Home from '../components/shared/Home/Home';
import Main from '../layout/Main';

export const routes = createBrowserRouter([
    {
        path:"blogs",
        element:<Blog></Blog>
    },
    {
        path:"faq",
        element:<Faq></Faq>
    },
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"courses",
                element:<Courses/>
            }
        ]
    },
    
])