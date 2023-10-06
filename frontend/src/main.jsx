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
import CatagoryDetails from './components/Catagories/catagorydetails.jsx'
import Resourcedetails from './components/Resources/resourcedetails.jsx'

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
        path: "deals",
        element: "www.google.com"
      },
      {
        path: "catagories",
        element: <Catagories/>
      },
      {
        path: "resources",
        element: <Resources/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path:"deals/:id",
        element: <Dealdetails/>
      },
      {
        path:"catagories/:id",
        element: <CatagoryDetails/>
      },
      {
        path:"Resources/:id",
        element: <Resourcedetails/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
