import PropTypes from 'prop-types';
import './Modal.css';

function Modal ({children}) {
    return (
    <div className="modal">
        {children}
    </div>
    )
}

export default Modal;
