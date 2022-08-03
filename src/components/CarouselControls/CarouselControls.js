import './CarouselControls.css';
import squares from '../../images/squares.png';

function CarouselControls ({prev, next, more}) {
    return (
            <div className='carousel-controls'>
                <div className='controls-inner'>
                    <button className='previous btn' onClick={prev}>{'< '}previous project</button>
                    <img src={squares} onClick={more}/>
                    <button className='next btn' onClick={next}>next project{' >'}</button>
                </div>
            </div>
    )
}

export default CarouselControls;
