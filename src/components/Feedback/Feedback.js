import React, { useState } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'
import './Feedback.css'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Modal from '../Modal/Modal';
import Feedbacks from '../Feedbacks/Feedbacks';

function Feedback() {
    const [givingFeedback, setGivingFeedback] = useState(false);

    return (
        <div>
            <Feedbacks/>
            <div className='feedback-container'>
                <div className='feedback-inner'>
                    <Text styles='title' text='Give us a feedback'/>
                    <Text styles='gray' text='Let us know what you think about our projects'/>
                    <Button styles='primary' text='give feedback' onclick={()=> setGivingFeedback(true)}/>
                </div>
                {givingFeedback ? 
            <div>
                <Modal close={()=>setGivingFeedback(false)}/>
                <FeedbackForm closeModal={setGivingFeedback}/>
            </div>
                
                : 
                ''
            }
            </div>
            
        </div>
        
    )
}

export default Feedback;
