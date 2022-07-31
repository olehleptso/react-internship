import './CarouselItem.css';
import breakfast from '../../images/breakfast.jpg';
import Text from '../Text/Text';

function CarouselItem () {
    return (
        <div className='carousel-item'>
            <div className='item-info-container'>
                <div className='item-info'>
                    <Text styles='title' text='Light Breakfast'/>
                    <Text styles='gray' text='Litht his cant a creeping. Be, bring blessed night. Replenish blessed
                    creature good. Saw earth every creepeth lights day, divided abundantly from. In. Said given lights
                    Sixth the male. Upon their multiply. Kind best. Him tree Upon'/>
                    <Text styles='gray' text='Cattle. Dominion day herb shed creeping divide darkness. Which. Subdue had'/>
                </div>
                <div className='item-info'>
                    <div className='item-fields'>
                        <Text styles='bold' text='Client:'/>
                        <Text styles='gray' text='Emma Moris'/>
                    </div>
                    <div className='item-fields'>
                        <Text styles='bold' text='Date:'/>
                        <Text styles='gray' text='25.06.2017'/>
                    </div>
                    <div className='item-fields'>
                        <Text styles='bold' text='Share:'/>
                        <Text styles='gray' text='Facebook, Twitter, Pinterest'/>
                    </div>
                </div>
            </div>
            <div className='item-image'>
                <img src={breakfast}></img>
            </div>
        </div>
    )
}

export default CarouselItem;
