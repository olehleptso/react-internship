import './Button.css';
import PropTypes from 'prop-types';

function Button ({text, styles, onclick}) {
    return (
        <div >
            <button className={styles} onClick={onclick}>{text}</button>
        </div>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};