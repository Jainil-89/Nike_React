import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Cart } from './Components/Cart.jsx'
import KC from './Components/KC.jsx'
import Kid from './Components/Kid.jsx'
import WC from './Components/WC.jsx'
import Wchild from './Components/Wchild.jsx'
import Women from './Components/Women.jsx'
import Men from './Components/Men.jsx'
import Detail from './Components/Detail.jsx'
import Shoes from './Components/Shoes.jsx'
import Gear from './Components/Gear.jsx'
import { createBrowserRouter,RouterProvider,BrowserRouter as Rout } from 'react-router-dom'
import Clothing from './Components/Clothing.jsx'
import { Login } from './Components/Login.jsx'
import ClothingDetail from './Components/ClothingDetail.jsx'
import {CartProvider} from "./Context/Cart.jsx"
import { Signup } from './Components/Signup';




const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/Signup',
    element: <Signup />
  },
  {
    path:'/Men',
    element:<Men />
  },
  {
    path:'/Women',
    element:<Women />
  },
  {
    path:'/Kid',
    element:<Kid />
  },
  {
    path:'/Men/Shoes',
    element:<Shoes  />
  },
  {
    path:'/Kid/Shoes',
    element:<Shoes  />
  },
  {
    path:'/Women/Shoes',
    element:<Shoes  />
  },
  {
    path:'/Women/Gear',
    element:<Gear  />
  },
  {
    path:'/Kid/Gear',
    element:<Gear  />
  },
  {
    path:'/Shoes/Detail/:id',
    element:<Detail  />
  },
  {
    path:'/Login',
    element:<Login  />
  },
  {
    path:'/cart',
    element:<Cart  />
  },
  {
    path:'Men/clothing/',
    element:<Clothing  />
  },
  {
    path:'Women/clothing/',
    element:<WC  />
  },
  {
    path:'Kid/clothing/',
    element:<KC  />
  },
  {
    path:'/clothing/:id',
    element:<Wchild  />
  },
  {
    path:'/clothing/Detail/:id',
    element:<ClothingDetail  />
  },
  {
    path:'/Men/Gear',
    element:<Gear  />
  },
  {
    path:'/Gear/Detail/:id',
    element:<ClothingDetail  />
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
