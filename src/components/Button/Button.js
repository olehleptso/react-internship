import './Button.css';
import PropTypes from 'prop-types';

function Button ({text, styles, onclick}) {
    return (
            <button className={styles} onClick={onclick}>{text}</button>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};