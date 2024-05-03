import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Component/Error/ErrorPage';
import Home from './Pages/Home/Home';
import SignIN from './Pages/SignIn/SignIN';
import Provider from './Provider/Provider';
import Register from './Pages/Register/Register';
import AddTour from './Pages/ADDTOUR/AddTour';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import SpotDtls from './Pages/SpotDtls/SpotDtls';
import Mylist from './Pages/Mylist/Mylist';
import AllSpot from './Pages/AllSpot/AllSpot';
import Updated from './Pages/Updated/Updated';

import CountryCard from './Pages/Home/CountryCard/CountryCard';


const router = createBrowserRouter([
    
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,    
    children :[
      {
        path: "/",
           element:<Home></Home>,
           loader : () => fetch('http://localhost:5000/letsgo')
      },
      {
        path: "/allspot",
           element:<AllSpot></AllSpot>,
           loader : () => fetch('http://localhost:5000/letsgo')
      },
      
           {
        path:"/login",
        element:  <SignIN></SignIN>
       },
       {
        path:"/register",
        element:   <Register></Register>
    },
        
      {         
          path: '/addtour',
         element: <PrivetRoute>
                          <AddTour></AddTour>
                 </PrivetRoute>
       
      },
      {         
        path: '/singleCard/:id',
        element:   <PrivetRoute>
                     <SpotDtls></SpotDtls>         
                 </PrivetRoute>,   
        loader : ()=>fetch('http://localhost:5000/letsgo')
    },
          
      {         
      path: '/countrycard/:name',
      element:<CountryCard></CountryCard>,       
               
      loader : ()=>fetch('http://localhost:5000/letsgo')
     }, 

    {
      path: "/Updated/:id",
      element: <Updated></Updated>,
      loader: ({params}) =>
        fetch(`http://localhost:5000/letsgo/${params.id}`),
    },
    {
      path: "/myspot",
      element:  <Mylist></Mylist> 
    },

    ] 
  },
  



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
