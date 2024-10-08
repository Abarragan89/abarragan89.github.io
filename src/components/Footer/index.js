import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';


function Footer({ location }) {
    const isHome = location.pathname === '/';
    return (
        <>
            {isHome ? 
            <footer id='home-footer'>
                <a href='https://github.com/Abarragan89' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a href='https://www.linkedin.com/in/anthony-barragan-ba4a12226/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a href='https://stackoverflow.com/users/17237403/anthony-barragan' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
            </footer> :
            <footer>
                <a href='https://github.com/Abarragan89' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a href='https://www.linkedin.com/in/anthony-barragan-ba4a12226/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a href='https://stackoverflow.com/users/17237403/anthony-barragan' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
            </footer>}
        </>
        
    )
}



export default Footer;