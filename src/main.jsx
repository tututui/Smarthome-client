import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/Register.jsx'
import LoginPage from './pages/Login.jsx'
import HomePage from './pages/Home'
import BedRoom from './pages/BedRoom.jsx'
import Outdoor from './pages/Outdoor.jsx'
import MobileSibar from './components/MobileSibar.jsx'


const router = createBrowserRouter([
  {
    path: "/Register",
    element: <RegisterPage />
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/BedRoom",
    element:<BedRoom/>
  },
 {
  path: "/Outdoor",
  element: <Outdoor/>
}, 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
            <RouterProvider router={router}/>
      
    </NextUIProvider>
  </StrictMode>,
)
