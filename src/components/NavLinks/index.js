import  { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function NavNavLinks({
    closeMobileMenu,
    isMobile
     }) {

    function closeHamburger () {
        if(isMobile) {
            closeMobileMenu();
        }
    }
    // animation for nav NavLinks
    const animateFrom = { opacity: 0, y:-40 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        <ul>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            onClick={closeHamburger}
            className={'link-el'}
            ><NavLink to='/' className={'link-el'}>Home</NavLink></motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.1}}
            className={`link-el`}
            onClick={closeHamburger}
            ><NavLink to='/about' className={'link-el'}>About</NavLink></motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={`link-el`} 
            onClick={closeHamburger}
            ><NavLink to='/portfolio' className={'link-el'}>Portfolio</NavLink></motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={`link-el`} 
            onClick={closeHamburger}
            ><NavLink to='/contact' className={'link-el'}>Contact</NavLink></motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            className={`link-el`}
            onClick={closeHamburger}
            ><NavLink to='/resume' className={'link-el'}>Resume</NavLink></motion.li >
        </ul>
    );
}
export default NavNavLinks;