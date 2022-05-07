import NavLinks from '../NavLinks';
import {CgMenuRound, CgCloseO} from 'react-icons/cg';
import { useState } from 'react';


function MobileNav ({
    setIsAbout, 
    isAbout,
    isPortfolio,
    setIsPortfolio, 
    isContact,
    setIsContact,
    isResume,
    setIsResume, 
    isHomepage,
    setIsHomepage,
    }) {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <CgMenuRound className='hamburger' size='30px' color='rgb(0, 255, 76)' onClick={()=> setOpen(!open)}/>

    const closeIcon = <CgCloseO className='hamburger' size='30px' color='rgb(0, 255, 76)' onClick={()=> setOpen(!open)}/>

    function closeMobileMenu () {
        setOpen(false);
    }

    return (
        <nav className='mobile-nav'>
            {open ? closeIcon : hamburgerIcon}
            {open && 
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
            isMobile={true} 
            closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNav;