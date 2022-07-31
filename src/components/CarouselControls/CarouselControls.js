import './CarouselControls.css';

function CarouselControls ({prev, next}) {
    return (
            <div className='carousel-controls'>
                <div className='controls-inner'>
                    <button className='previous btn' onClick={prev}>{'< '}previous project</button>
                    <button className='next btn' onClick={next}>next project{' >'}</button>
                </div>
            </div>
    )
}

export default CarouselControls;
