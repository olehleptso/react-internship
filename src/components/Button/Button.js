import './Button.css';
import PropTypes from 'prop-types';

function Button ({text, styles, onclick, type}) {
    return (
            <button className={styles} onClick={onclick} type={type}>{text}</button>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};