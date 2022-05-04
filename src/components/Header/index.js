
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function Header({
    setIsAbout,
    setIsPortfolio,
    setIsContact,
    setIsResume,
    setIsHomepage }) {
    return (
        <header>
            <Navbar collapseOnSelect expand='sm' className='container-fluid'>
                {/* <img src='profile-pic.JPG' id='profile-pic'></img> */}

                <Navbar.Toggle aria-controls='responsive-navbar-nav' className='bg-success' />
                <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end '>
                    <Navigation
                        setIsAbout={setIsAbout}
                        setIsPortfolio={setIsPortfolio}
                        setIsContact={setIsContact}
                        setIsResume={setIsResume}
                        setIsHomepage={setIsHomepage}
                    />
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;