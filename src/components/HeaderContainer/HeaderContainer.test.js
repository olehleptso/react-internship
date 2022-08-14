import { render, screen } from '@testing-library/react';
import HeaderContainer from './HeaderContainer';

test('renders HeaderContainer component', () => {
    render(<HeaderContainer />);
    const HeaderContainerSec = screen.getByTestId('HeaderContainer');
    expect(HeaderContainerSec).toBeInTheDocument();
});