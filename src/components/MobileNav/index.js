import NavLinks from '../NavLinks';
import {CgMenuRound, CgCloseO} from 'react-icons/cg';
import { useState } from 'react';


function MobileNav () {
    const [open, setOpen] = useState(false)
    const hamburgerIcon = <CgMenuRound className='hamburger' size='35px' color='rgb(0, 255, 76)' onClick={()=> setOpen(!open)}/>
    const closeIcon = <CgCloseO className='hamburger' size='35px' color='rgb(0, 255, 76)' onClick={()=> setOpen(!open)}/>

    function closeMobileMenu () {
        setOpen(false);
    }

    return (
        <nav className='mobile-nav'>
            {open ? closeIcon : hamburgerIcon}
            {open && 
            <NavLinks
            isMobile={true} 
            closeMobileMenu={closeMobileMenu}
            />}
        </nav>
    )
}

export default MobileNav;