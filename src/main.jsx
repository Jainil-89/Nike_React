import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Scart from './Components/Scart.jsx'
import D3 from './Components/3D.jsx'
import KC from './Components/KC.jsx'
import Kid from './Components/Kid.jsx'
import WC from './Components/WC.jsx'
import Wchild from './Components/Wchild.jsx'
import Women from './Components/Women.jsx'
import Men from './Components/Men.jsx'
import Detail from './Components/Detail.jsx'
import Shoes from './Components/Shoes.jsx'
import Gear from './Components/Gear.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Clothing from './Components/Clothing.jsx'
import ClothingDetail from './Components/ClothingDetail.jsx'
import Ccart from './Components/Ccart.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
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
    path:'/Detail/cart/:id',
    element:<Scart  />
  },
  {
    path:'/clothing/cart/:id',
    element:<Ccart  />
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
  },
  {
    path:'/Clothingdetail/D3/:id',
    element:<D3  />
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
