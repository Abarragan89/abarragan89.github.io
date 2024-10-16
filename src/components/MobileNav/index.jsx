import NavLinks from '../NavLinks';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import './index.css';

import { useState } from 'react';

function MobileNav() {
    const [open, setOpen] = useState(false)
    const hamburgerIcon = <RxHamburgerMenu className='hamburger' size='30px' color='rgb(14, 193, 68)' onClick={() => setOpen(!open)} />
    const closeIcon = <IoCloseOutline className='hamburger' size='35px' color='rgb(14, 193, 68)' onClick={() => setOpen(!open)} />


    function closeMobileMenu() {
        setOpen(false);
    }

    return (
        <div className='mobile-nav'>
            {open ? closeIcon : hamburgerIcon}
            {open &&
                <NavLinks
                    isMobile={true}
                    closeMobileMenu={closeMobileMenu}
                />}
        </div>
    )
}

export default MobileNav;