import PropTypes from 'prop-types';
import './Modal.css';

function Modal ({children, close}) {
    return (
    <div className="modal" onClick={close}>
        {children}
    </div>
    )
}

export default Modal;
