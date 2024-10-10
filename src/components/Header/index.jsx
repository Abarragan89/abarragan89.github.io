import Navigation from '../Navigation';
import MobileNav from '../MobileNav';
import './index.css';
function Header() {
    return (
        <div className='header'>
            <nav>
                <MobileNav />
                <Navigation />
            </nav>
        </div> 

    )
}

export default Header;