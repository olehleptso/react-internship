import { render, screen } from '@testing-library/react';
import HeaderInfo from './HeaderInfo';

test('renders HeaderInfo component', () => {
    render(<HeaderInfo />);
    const HeaderInfoSec = screen.getByTestId('HeaderInfo');
    expect(HeaderInfoSec).toBeInTheDocument();
});