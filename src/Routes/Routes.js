import {
    createBrowserRouter,
    
  } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Faq from '../components/FAQ/Faq';
import Courses from '../components/shared/Courses/Courses';
import CourseDetails from '../components/shared/CourseDetails/CourseDetails';
import Home from '../components/shared/Home/Home';
// import Home from '../components/shared/Home/Home';
import Main from '../layout/Main';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const routes = createBrowserRouter([
    // {
    //     path:"blogs",
    //     element:<Blog></Blog>
    // },
    // {
    //     path:"faq",
    //     element:<Faq></Faq>
    // },
    
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"courses",
                element:<Courses/>,
                children:[
                    {
                        path:"/courses/:id",
                        element:<CourseDetails></CourseDetails>
                    },
                ]
            },
            {
                path:"/",
                element:<Home></Home>
            },
            
            {
                path:"blogs",
                element:<Blog></Blog>
            },
            {
                path:"faq",
                element:<Faq></Faq>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
        ]
    },
    
])