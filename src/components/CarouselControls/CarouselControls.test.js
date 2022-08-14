import { render, screen } from '@testing-library/react';
import CarouselControls from './CarouselControls';

test('renders CarouselControls component', () => {
    render(<CarouselControls />);
    const CarouselControlsSec = screen.getByTestId('CarouselControls');
    expect(CarouselControlsSec).toBeInTheDocument();
});