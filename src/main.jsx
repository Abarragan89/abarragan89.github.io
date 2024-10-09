import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Layout from './components/Layout';
import Projects from './pages/projects';
import Resume from './pages/Resume';
import PrintResume from './pages/PrintResume';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <Projects />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/resume-pdf",
        element: <PrintResume />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
