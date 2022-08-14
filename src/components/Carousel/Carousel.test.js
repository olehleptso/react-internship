import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';


test('renders Carousel component', () => {
    render(<Carousel />);
    const CarouselSec = screen.getByTestId('carousel');
    expect(CarouselSec).toBeInTheDocument();
});