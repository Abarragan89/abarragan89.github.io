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
        { id: 'ratings', label: 'Section 1' },
        { id: 'marquee-project', label: 'Section 2' },
        { id: 'homepage-title', label: 'Section 3' },
        { id: 'resume', label: 'Section 4' },
        { id: 'profile-pic', label: 'Section 4' },
    ];


    const [activeSection, setActiveSection] = useState('homepage-title');

    useEffect(() => {
        const handleObserver = (entries) => {
            console.log('entries ', entries)
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    console.log('active section ', activeSection)
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1, // Trigger when 70% of the section is visible
        });

        sections.forEach((section) => {
            const sectionElement = document.getElementById(section.id);
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
                <a href="/#homepage-main" className={`${activeSection === 'homepage-title' ? 'active' : ''}`}>Home</a>
            </motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={closeHamburger}
                className={'link-el'}
            >
                <a href="#ratings" className={`${activeSection === 'ratings' ? 'active' : ''}`}>Skills</a>
            </motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.20 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#about" className={`${activeSection === 'profile-pic' ? 'active' : ''}`}>About</a>
            </motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.20 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#projects" className={`${activeSection === 'marquee-project' ? 'active' : ''}`}>Projects</a>
            </motion.li >

            <span className='link-dot'></span>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.40 }}
                className={`link-el`}
                onClick={closeHamburger}
            >
                <a href="#resume" className={`${activeSection === 'resume' ? 'active' : ''}`}>Resume</a>
            </motion.li >
        </ul>
    );
}
export default NavLinks;