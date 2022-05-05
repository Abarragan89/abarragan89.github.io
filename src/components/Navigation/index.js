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
                    <NavLink id='homepage' onClick={renderHomepage}><span className='link-el'>Home</span></NavLink>
                    <NavLink id='about-me' onClick={renderAboutme}><span className='link-el'>About me</span></NavLink>
                    <NavLink id='portfolio' onClick={renderPortfolio}><span className='link-el'>Portfolio</span></NavLink>
                    <NavLink id='contact' onClick={renderContact}><span className='link-el'>Contact</span></NavLink>
                    <NavLink id='resume' onClick={renderResume}><span className='link-el'>Resume</span></NavLink>
                </Nav>
    );
}
export default Navigation;