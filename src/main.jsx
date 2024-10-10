import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Layout from './components/Layout';
import Projects from './pages/projects';
import PrintResume from './pages/PrintResume';
import './reset.css';
import './mediaQueries.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/resume" element={<PrintResume />} />
        </Routes>
      </Layout>
    </HashRouter>
  </StrictMode>,
)
