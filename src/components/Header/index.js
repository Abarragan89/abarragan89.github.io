import Navigation from '../Navigation';
import MobileNav from '../MobileNav';


function Header({
    setIsAbout,
    isAbout,
    setIsPortfolio,
    isPortfolio,
    isContact,
    setIsContact,
    isResume,
    setIsResume,
    isHomepage,
    setIsHomepage
    }) {
    return (
        <div className='header'>
            <nav>
                <MobileNav
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

                <Navigation 
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
                //  // Homepage Var
                isHomepage={isHomepage}
                setIsHomepage={setIsHomepage}
                />
            </nav>
        </div> 

    )
}

export default Header;