import React, { useState } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'
import './Feedback.css'
import FeedbackForm from '../FeedbackForm/FeedbackForm';

function Feedback() {
    const [givingFeedback, setGivingFeedback] = useState(false);

    return (
        <div>
            <div className='feedback-container'>
                <div className='feedback-inner'>
                    <Text styles='title' text='Give us a feedback'/>
                    <Text styles='gray' text='Let us know what you think about our projects'/>
                    <Button styles='primary' text='give feedback' onclick={()=> setGivingFeedback(true)}/>
                </div>
            </div>
            {givingFeedback ? <FeedbackForm closeModal={setGivingFeedback}/> : ''}
        </div>
        
    )
}

export default Feedback;
