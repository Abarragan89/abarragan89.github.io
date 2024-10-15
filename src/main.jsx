import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './pages/homepage';
import Layout from './components/Layout';
import './global.css';
import './mediaQueries.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Homepage />
    </Layout>
  </StrictMode>
)
