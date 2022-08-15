import React, { useState, useEffect } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'
import './Feedback.css'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Modal from '../Modal/Modal';
import Feedbacks from '../Feedbacks/Feedbacks';
import { addFeedback, getFeedbacks } from '../../API/feedback';

function Feedback() {
    const [givingFeedback, setGivingFeedback] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        (async () => {
          const data = await getFeedbacks();
          setFeedbacks(data);
        })();
    }, [setFeedbacks]);

    const onSubmitForm = async (feedback) => {
        console.log(feedback);
        await addFeedback(feedback);
        const response = await getFeedbacks();
        setFeedbacks(response);
    };

    const filtered = feedbacks ? feedbacks.filter((item) => item.rating >= 3.5).slice(-3).reverse()  : null;

    return (
        <div id="feedbacks" data-testid="Feedback">
            <Feedbacks data={filtered}/>
            <div className='feedback-container'>
                <div className='feedback-inner'>
                    <Text styles='title' text='Give us a feedback'/>
                    <Text styles='gray' text='Let us know what you think about our projects'/>
                    <Button styles='primary' text='give feedback' onclick={()=> setGivingFeedback(true)}/>
                </div>
                {givingFeedback ? 

                        
                        <FeedbackForm closeModal={setGivingFeedback} onSubmit={onSubmitForm}/>

                    : 
                    ''
                }
            </div>
        </div>
        
    )
}

export default Feedback;
