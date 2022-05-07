import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'




function Footer() {
    return (
        <footer className='d-flex justify-content-center'>
            <a href='https://github.com/Abarragan89' target='_blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href='https://www.linkedin.com/in/anthony-barragan-ba4a12226/' target='_blank'className='px-5'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href='https://stackoverflow.com/users/17237403/anthony-barragan' target='_blank'><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
        </footer>
    )
}



export default Footer;