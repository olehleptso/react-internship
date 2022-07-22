import './Header.css';
import logo from '../../images/triangle.png'

function Header () {
    return (
            <div className="header">
                <img src={logo} alt="Logo"/>
                <div className="header-menu">
                    <ul className="header-nav">
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">work</a></li>
                        <li><a href="#">process</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">testimonials</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </div>
    );
}

export default Header;