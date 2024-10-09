import Navigation from '../Navigation';
import MobileNav from '../MobileNav';

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