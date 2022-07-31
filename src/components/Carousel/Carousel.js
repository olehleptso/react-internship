import { useState } from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';

function Carousel () {
    const [currentSlide, setCurrentSlide] = useState(0);



    return (
        <div className='carousel'>
            <div 
                className='carousel-inner'
            >
                <CarouselItem/>
            </div>
            
        </div>
    )
}

export default Carousel;
