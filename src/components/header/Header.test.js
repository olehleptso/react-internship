import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
    render(<Header />);
    const HeaderSec = screen.getByTestId('Header');
    expect(HeaderSec).toBeInTheDocument();
});