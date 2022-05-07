import  { motion } from 'framer-motion';

function NavLinks({
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
    closeMobileMenu,
    isMobile
     }) {

    function renderAboutme () {
        setIsHomepage(false);
        setIsAbout(true);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(false);
        if(isMobile) {
            closeMobileMenu();
        }
    }
    function renderPortfolio () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(true);
        setIsContact(false);
        setIsResume(false);
        if(isMobile) {
            closeMobileMenu();
        }
    }
    function renderContact () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(true);
        setIsResume(false);
        if(isMobile) {
            closeMobileMenu();
        }
    }
    function renderResume () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(true);
        if(isMobile) {
            closeMobileMenu();
        }
    }
    function renderHomepage () {
        setIsHomepage(true);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(false);
        if(isMobile) {
            closeMobileMenu();
        }
    }
    // animation for nav links
    const animateFrom = { opacity: 0, y:-40 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        <ul>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            onClick={renderHomepage}
            className={`link-el ${isHomepage && 'navIsActive'}`}
            >Home</motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.1}}
            className={`link-el ${isAbout && 'navIsActive'}`}
            onClick={renderAboutme}
            >About</motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={`link-el ${isPortfolio && 'navIsActive'}`} 
            onClick={renderPortfolio}
            >Portfolio</motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={`link-el ${isContact && 'navIsActive'}`} 
            onClick={renderContact}
            >Contact</motion.li >

            <motion.li  
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            className={`link-el ${isResume && 'navIsActive'}`}
            onClick={renderResume}
            >Resume</motion.li >
        </ul>
    );
}
export default NavLinks;