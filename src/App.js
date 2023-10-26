import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Homepage from './components/Homepage';
import PrintResume from './components/PrintResume';


import {HashRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/resume-pdf' element={<PrintResume />} />
        </Routes>
      <Footer location={location} />
    </>
  );
}

export default App;
