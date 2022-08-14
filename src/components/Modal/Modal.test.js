import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders Modal component', () => {
    render(<Modal />);
    const ModalSec = screen.getByTestId('Modal');
    expect(ModalSec).toBeInTheDocument();
});