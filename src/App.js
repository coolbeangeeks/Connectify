import React from 'react'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Navbar from './Components/Navbar/Navbar'
import Leftbar from './Components/Leftbar/Leftbar'
import Rightbar from './Components/Rightbar/Rightbar'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,  Outlet
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  const Layout=()=>{
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
    
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/profile/:id',
        element:<Profile/>
      }
    ]

      
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
      },

  ]);

  return (
  
    
    <RouterProvider router={router} />    
    
  )
}

export default App