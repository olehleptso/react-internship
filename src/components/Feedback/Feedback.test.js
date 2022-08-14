import { render, screen } from '@testing-library/react';
import Feedback from './Feedback';

test('renders Feedback component', () => {
    render(<Feedback />);
    const FeedbackSec = screen.getByTestId('Feedback');
    expect(FeedbackSec).toBeInTheDocument();
});