import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
    render(<Footer />);
    const FooterSec = screen.getByTestId('Footer');
    expect(FooterSec).toBeInTheDocument();
});