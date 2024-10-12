import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'
// sounds
import useSound from 'use-sound';
import clickSound from '../../assets/sounds/click.wav';
import './index.css';

function NavLinks({ closeMobileMenu, isMobile }) {
    const [playSwish] = useSound(clickSound, { volume: '.5' });

    function closeHamburger() {
        playSwish();
        if (isMobile) {
            closeMobileMenu();
        }
    }
    // animation for nav NavLinks
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={closeHamburger}
                className={'link-el'}
            ><NavLink to='/' className={'link-el'}>Home</NavLink></motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.20 }}
                className={`link-el`}
                onClick={closeHamburger}
            ><NavLink to='/portfolio' className={'link-el'}>Projects</NavLink></motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.40 }}
                className={`link-el`}
                onClick={closeHamburger}
            ><NavLink to='/resume' className={'link-el'}>Resume</NavLink></motion.li >
        </ul>
    );
}
export default NavLinks;