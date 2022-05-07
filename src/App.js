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

  const[hasEntered, setHasEntered] = useState(false)

  return (
    <>{hasEntered &&
    <Header 
    // About Bar
    isAbout={isAbout}
    setIsAbout={setIsAbout}
    // Portfolio Var
    isPortfolio={isPortfolio}
    setIsPortfolio={setIsPortfolio}
    // Contact Var
    isContact={isContact}
    setIsContact={setIsContact}
    // Resume Var
    isResume={isResume}
    setIsResume={setIsResume}
    // Homepage Var
    isHomepage={isHomepage}
    setIsHomepage={setIsHomepage}
    />}
    <main>
      {isHomepage && <Homepage hasEntered={hasEntered} setHasEntered={setHasEntered}/>}
      {isAbout && <About />}
      {isPortfolio && <Portfolio />}
      {isContact && <Contact/>}
      {isResume && <Resume />}
    </main>
    {hasEntered &&<Footer />}
    </>
    
  );
}

export default App;
