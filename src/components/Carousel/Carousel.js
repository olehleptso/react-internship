import { useState, useEffect } from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel.css';

function Carousel () {

    let data = ["1","2","3"];
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselScroll = () => {
        if (currentSlide === data.length-1) {
            return setCurrentSlide(0)
        }
        return setCurrentSlide(currentSlide + 1)
    }

    useEffect (() =>{
        const interval = setInterval(()=> {carouselScroll()}, 2000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carousel'>
            <div 
                className='carousel-inner'
                
            >
                {data.map((item,index) => {
                    return <div 
                                className='carousel-item-block' key={index}
                                style={{ transform: `translate(-${currentSlide * 100}%)`}}
                            >
                                <CarouselItem />
                            </div>
                })
                }
            </div>
            
        </div>
    )
}

export default Carousel;
