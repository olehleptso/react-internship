import './CarouselControls.css';

function CarouselControls ({prev, next}) {
    return (
            <div className='carousel-controls'>
                <div className='controls-inner'>
                    <button className='previous' onClick={prev}>previous project</button>
                    <button className='next' onClick={next}>next project</button>
                </div>
            </div>
    )
}

export default CarouselControls;
