import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
import Resourcelayout from './components/Resources/resourcelayout.jsx'
import Deallayout from './components/Deals/deallayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "deals",
        element: <Deallayout />,
        children: [
          {
            path: "",
            element: <Deals />,
          },
          {
            path: ":id",
            element: <Dealdetails />
          },
        ]
      },
      {
        path: "catagories",
        element: <Catagories />
      },
      {
        path: "resources",
        element: <Resourcelayout />,
        children: [
          {
            path: "",
            element: <Resources />
          },
          {
            path: "procurementoverview",
            element: <Procurementoverview />
          },
          {
            path: "negosiation",
            element: <Negosiation />
          },
          {
            path: "suppliermanagement",
            element: <Suppliermanagement />
          },
          {
            path: "contracts",
            element: <Contracts />
          },
          {
            path: "spendcategories",
            element: <Spendcategories />
          },
        ]
      },
      {
        path: "resources/:id",
        element: <Resourcedetails />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      },

      {
        path: "catagories/:id",
        element: <CatagoryDetails />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
