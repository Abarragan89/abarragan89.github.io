import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'



function Footer() {
    return (
        <footer className='d-flex justify-content-center'>
            <a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="#" className="px-5"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="#"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
        </footer>
    )
}



export default Footer;