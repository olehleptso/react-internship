import './Text.css';
import PropTypes from 'prop-types';

function Text ({text, styles}) {
    return (
        <div className={styles}>
            {text}
        </div>
    )
}

export default Text;

Text.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string
};