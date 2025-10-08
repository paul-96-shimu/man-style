import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Route/Route.jsx'
import { RouterProvider } from "react-router";
import Authprovider from './Context/AuthContext/Authprovider.jsx'
import { CartProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Authprovider>
  </StrictMode>,
)
