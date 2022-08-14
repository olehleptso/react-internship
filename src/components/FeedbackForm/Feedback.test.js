import { render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

test('renders FeedbackForm component', () => {
    render(<FeedbackForm />);
    const FeedbackFormSec = screen.getByTestId('FeedbackForm');
    expect(FeedbackFormSec).toBeInTheDocument();
});