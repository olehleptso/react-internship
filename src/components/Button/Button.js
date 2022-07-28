import './Button.css';
import PropTypes from 'prop-types';

function Button ({text, styles}) {
    return (
        <div >
            <button className={styles}>{text}</button>
        </div>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};