import { render, screen } from '@testing-library/react';
import Process from './Process';

test('renders Process component', () => {
    render(<Process />);
    const ProcessSec = screen.getByTestId('Process');
    expect(ProcessSec).toBeInTheDocument();
});