import { Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation({
    setIsAbout, 
    setIsPortfolio, 
    setIsContact,
    setIsResume,
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
                     <NavLink id='homepage' className='text-white' onClick={renderHomepage}>Home</NavLink>
                    <NavLink id='about-me' className='text-white' onClick={renderAboutme}>About me</NavLink>
                    <NavLink id='portfolio' className='text-white' onClick={renderPortfolio}>Portfolio</NavLink>
                    <NavLink id='contact' className='text-white' onClick={renderContact}>Contact</NavLink>
                    <NavLink id='resume' className='text-white' onClick={renderResume}>Resume</NavLink>
                </Nav>
    );
}
export default Navigation;