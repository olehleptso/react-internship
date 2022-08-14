import { render, screen } from '@testing-library/react';
import Services from './Services';

test('renders Services component', () => {
    render(<Services />);
    const ServicesSec = screen.getByTestId('Services');
    expect(ServicesSec).toBeInTheDocument();
});