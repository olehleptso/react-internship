import { useState, useEffect } from 'react';
import CarouselControls from '../CarouselControls/CarouselControls';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';

function Carousel () {

    let data = ["1","2","3"];
    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : data.length - 1;
        setCurrentSlide(index);
      }
      
    const next = () => {
        const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
      }


    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                {data.map((item,index) => {
                    return <div 
                                className='carousel-item-block' key={index}
                                style={{ transform: `translate(-${currentSlide * 100}%)`}}
                            >
                                <CarouselItem />
                            </div>
                })}
            </div>
            <CarouselControls prev={prev} next={next}/>
        </div>
    )
}

export default Carousel;
