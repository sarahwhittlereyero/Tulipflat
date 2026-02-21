import { createBrowserRouter, RouterProvider } from 'react-router'
import PageLayout from '@/components/layout/PageLayout'
import HomePage from '@/pages/HomePage'
import ProcessPage from '@/pages/ProcessPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import TipsPage from '@/pages/TipsPage'
import CityGuidePage from '@/pages/CityGuidePage'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/process', element: <ProcessPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/tips', element: <TipsPage /> },
      { path: '/tips/:slug', element: <CityGuidePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
