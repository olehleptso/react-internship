import './CarouselItem.css';
import Text from '../Text/Text';

function CarouselItem ({data}) {
    return (
            <div className='carousel-item' data-testid="CarouselItem">
                <div className='item-info-container'>
                    <div className='item-info'>
                        <Text styles='title' text={data.name}/>
                        <Text styles='gray' text={data.description}/>
                        <Text styles='gray' text={data.short}/>
                    </div>
                    <div className='item-info'>
                        <div className='item-fields'>
                            <Text styles='bold' text='Client:'/>
                            <Text styles='gray' text={data.client}/>
                        </div>
                        <div className='item-fields'>
                            <Text styles='bold' text='Date:'/>
                            <Text styles='gray' text={data.date}/>
                        </div>
                        <div className='item-fields'>
                            <Text styles='bold' text='Share:'/>
                            <Text styles='gray' text={data.share}/>
                        </div>
                    </div>
                </div>
                <div className='item-image'>
                    <img src={data.main}></img>
                </div>
            </div>
    )
}

export default CarouselItem;
