import PropTypes from 'prop-types';
import './Modal.css';

function Modal ({children, close, opened}) {
    return (
    <div className={opened? 'modal':'modalClose'} onClick={close} data-testid="Modal">
        {children}
    </div>
    )
}

export default Modal;
