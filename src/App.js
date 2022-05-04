import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Homepage from './components/Homepage';

function App() {
  const [isHomepage, setIsHomepage] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isResume, setIsResume] = useState(false);
  return (
    <>
    <Header 
    setIsAbout={setIsAbout}
    setIsPortfolio={setIsPortfolio}
    setIsContact={setIsContact}
    setIsResume={setIsResume}
    setIsHomepage={setIsHomepage}
    />
    <main>
      {isHomepage && <Homepage />}
      {isAbout && <About />}
      {isPortfolio && <Portfolio />}
      {isContact && <Contact/>}
      {isResume && <Resume />}
    </main>
    <Footer />
    </>
    
  );
}

export default App;
