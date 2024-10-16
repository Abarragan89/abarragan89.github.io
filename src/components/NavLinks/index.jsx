import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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


    const sections = [
        { id: 'ratings' },
        { id: 'projects'},
        { id: 'home-section' },
        { id: 'resume'},
        { id: 'about'},
    ];


    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleObserver = (entries) => {
            console.log('entries ', entries)
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold: .3, // Trigger when 70% of the section is visible
        });

        sections.forEach((section) => {
            const sectionElement = document.getElementById(section.id);
            console.log('section element ', sectionElement)
            if (sectionElement) observer.observe(sectionElement);
        });

        return () => observer.disconnect(); // Cleanup the observer on unmount
    }, []);

    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={closeHamburger}
                className={'link-el'}
            >
                <a href="/#homepage-main" className={`${activeSection === 'home-section' ? 'active' : ''}`}>Home</a>
            </motion.li >

            {/* <span className='link-dot'></span> */}

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.15 }}
                onClick={closeHamburger}
                className={'link-el'}
            >
                <a href="#ratings" className={`${activeSection === 'ratings' ? 'active' : ''}`}>Skills</a>
            </motion.li >

            {/* <span className='link-dot'></span> */}

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.25 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#about" className={`${activeSection === 'about' ? 'active' : ''}`}>About</a>
            </motion.li >

            {/* <span className='link-dot'></span> */}

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.35 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#projects" className={`${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            </motion.li >

            {/* <span className='link-dot'></span> */}

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.45 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#resume" className={`${activeSection === 'resume' ? 'active' : ''}`}>Resume</a>
            </motion.li >
        </ul>
    );
}
export default NavLinks;