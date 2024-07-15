import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Men from './Components/Men.jsx'
import Detail from './Components/Detail.jsx'
import Shoes from './Components/Shoes.jsx'
import Gear from './Components/Gear.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Clothing from './Components/Clothing.jsx'
import ClothingDetail from './Components/ClothingDetail.jsx'

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
    path:'/Men/Shoes',
    element:<Shoes  />
  },
  {
    path:'/Shoes/Detail/:id',
    element:<Detail  />
  },
  {
    path:'Men/clothing/',
    element:<Clothing  />
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
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
