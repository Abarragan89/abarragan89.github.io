import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Layout from './components/Layout';
import Projects from './pages/projects';
import PrintResume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';
import './global.css';
import './mediaQueries.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/resume" element={<PrintResume />} />
        </Routes>
      </Layout>
    </HashRouter>
  </StrictMode>,
)
