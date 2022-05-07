import { Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSound from 'use-sound';

function Navigation({
    setIsAbout, 
    isAbout,
    isPortfolio,
    setIsPortfolio, 
    isContact,
    setIsContact,
    isResume,
    setIsResume, 
    isHomepage,
    setIsHomepage }) {

    function renderAboutme () {
        setIsHomepage(false);
        setIsAbout(true);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(false);
    }
    function renderPortfolio () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(true);
        setIsContact(false);
        setIsResume(false);
    }
    function renderContact () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(true);
        setIsResume(false);
    }
    function renderResume () {
        setIsHomepage(false);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(true);
    }
    function renderHomepage () {
        setIsHomepage(true);
        setIsAbout(false);
        setIsPortfolio(false);
        setIsContact(false);
        setIsResume(false);
    }
   
    return (
                <Nav>
                    <NavLink onClick={renderHomepage}><span className={`link-el ${isHomepage && 'navIsActive'}`}>Home</span></NavLink>
                    <NavLink onClick={renderAboutme}><span className={`link-el ${isAbout && 'navIsActive'}`}>About me</span></NavLink>
                    <NavLink onClick={renderPortfolio}><span className={`link-el ${isPortfolio && 'navIsActive'}`}>Portfolio</span></NavLink>
                    <NavLink onClick={renderContact}><span className={`link-el ${isContact && 'navIsActive'}`}>Contact</span></NavLink>
                    <NavLink onClick={renderResume}><span className={`link-el ${isResume && 'navIsActive'}`}>Resume</span></NavLink>
                </Nav>
    );
}
export default Navigation;