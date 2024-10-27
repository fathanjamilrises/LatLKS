import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashboardPage from './page/DashboardPage.jsx'
import LoginPage from './page/LoginPage.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter ([{
  path:'Dashboard',
  element: <DashboardPage />

},
{
  path:'Login',
  element:<LoginPage/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
