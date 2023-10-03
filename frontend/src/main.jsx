import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Deals from './components/Deals/deals.jsx'
import Catagories from './components/Catagories/catagories.jsx'
import Resources from './components/Resources/resources.jsx'
import Signup from './components/SignUp/signup.jsx'
import Login from './components/LogIn/login.jsx'
import Dealdetails from './components/Deals/dealdetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "Deals",
        element: <Deals/>
      },
      {
        path: "Catagories",
        element: <Catagories/>
      },
      {
        path: "Resources",
        element: <Resources/>
      },
      {
        path: "Signup",
        element: <Signup/>
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path:"Deals/:id",
        element: <Dealdetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
