import './Button.css';
import PropTypes from 'prop-types';

function Button ({text, styles, onclick, type, href}) {
    return (
        href? 
            <a href={href}><button className={styles} onClick={onclick} type={type} href={href}>{text}</button></a>
            :
            <button className={styles} onClick={onclick} type={type} href={href}>{text}</button>
        
            
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};