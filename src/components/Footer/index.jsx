import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import './index.css'


function Footer() {
    return (
        <footer>
            <div className='icons-div'>
                <a href='https://github.com/Abarragan89' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/anthony-barragan-ba4a12226/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                <a href='https://stackoverflow.com/users/17237403/anthony-barragan' target='_blank' rel='noopener noreferrer'><ImStackoverflow /></a>
            </div>
            <p>anthony.bar.89@gmail.com</p>
        </footer>
    )
}



export default Footer;