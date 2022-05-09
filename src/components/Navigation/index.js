import NavLinks from '../NavLinks'
function Navigation ({
    setIsAbout, 
    isAbout,
    isPortfolio,
    setIsPortfolio, 
    isContact,
    setIsContact,
    isResume,
    setIsResume, 
    isHomepage,
    setIsHomepage
    }) {
    return (
        <nav className="navigation">
            <NavLinks
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
             />
        </nav>
    )
}

export default Navigation