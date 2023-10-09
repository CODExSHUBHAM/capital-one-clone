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
import Contracts from './components/FeaturedArticles/contracts.jsx'
import Negosiation from './components/FeaturedArticles/negosiation.jsx'
import Procurementoverview from './components/FeaturedArticles/procurementoverview.jsx'
import Spendcategories from './components/FeaturedArticles/spendcategories.jsx'
import Suppliermanagement from './components/FeaturedArticles/suppliermanagement.jsx'

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
        element: <Deals/> 
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
      {
        path:"Resources/suppliermanagement",
        element: <Suppliermanagement/>
      },
      {
        path:"Resources/spendcategories",
        element: <Spendcategories/>
      },
      {
        path:"Resources/procurementoverview",
        element: <Procurementoverview/>
      },
      {
        path:"Resources/negosiation",
        element: <Negosiation/>
      },
      {
        path:"Resources/contracts",
        element: <Contracts/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
