import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import './cart.css'
import Cart from './routes/cart.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/home.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
