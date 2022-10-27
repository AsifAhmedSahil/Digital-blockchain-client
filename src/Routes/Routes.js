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
import SinglePageCourse from '../components/shared/SinglePageCourse/SinglePageCourse';
import Checkout from '../components/shared/Checkout/Checkout';
import ErrorPage from '../components/shared/Error/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"courses",
                element:<Courses/>,
                loader:()=>fetch("https://blockchain-courses-server-asifahmedsahil12-gmailcom.vercel.app/course-categories"),

                children:[
                    

                ]
            },
            {
                path:"/courses/:id",
                element:<SinglePageCourse></SinglePageCourse>,
                loader:({params}) => fetch(`https://blockchain-courses-server-asifahmedsahil12-gmailcom.vercel.app/courses/${params.id}`)
            },
            {
                path:"/checkout/:id",
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params}) => fetch(`https://blockchain-courses-server-asifahmedsahil12-gmailcom.vercel.app/checkout/${params.id}`)
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