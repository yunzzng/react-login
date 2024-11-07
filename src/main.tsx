import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import SigninPage from './pages/SigninPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import DomesticPage from './pages/DomesticPage.tsx'
import DomesticDetailPasge from './pages/DomesticDetailPage.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children:[
    {path: "/", element: <HomePage />},
    {path: "/signin", element: <SigninPage />},
    {path: "/signup", element: <SignupPage />},
    {path: "/profile", element: <ProfilePage />},
    {path: "/domestic", element: <DomesticPage/>},
    {path: "/domestic/:id", element: <DomesticDetailPasge />}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
