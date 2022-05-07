import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretSquareDown} from '@fortawesome/free-regular-svg-icons';


function Header({
    setIsAbout,
    isAbout,
    setIsPortfolio,
    isPortfolio,
    isContact,
    setIsContact,
    isResume,
    setIsResume,
    isHomepage,
    setIsHomepage }) {
    return (
        <header>
            <Navbar collapseOnSelect expand='sm' className='container-fluid'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' className='bg-success'>
                <span>
                    <FontAwesomeIcon className='hamburger-menu'
                        icon={faCaretSquareDown} color="#20FC8F" size="2x"
                    />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end '>
                    <Navigation
                        setIsAbout={setIsAbout}
                        isAbout={isAbout}

                        isPortfolio={isPortfolio}
                        setIsPortfolio={setIsPortfolio}
                        
                        isContact={isContact}
                        setIsContact={setIsContact}

                        setIsResume={setIsResume}
                        isResume={isResume}

                        isHomepage={isHomepage}
                        setIsHomepage={setIsHomepage}
                    />
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;