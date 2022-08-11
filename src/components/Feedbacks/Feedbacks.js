import React, { useState, useEffect } from 'react'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './Feedbacks.css'
import { addFeedback, getFeedbacks } from '../../API/feedback';

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])

    

    const filtered = feedbacks ? feedbacks.filter((item) => item.rating >= 3.5).slice(-3).reverse()  : null;

    useEffect(() => {
        (async () => {
          const data = await getFeedbacks();
          setFeedbacks(data);
        })();
      }, [setFeedbacks]);
 
    return (
        <div className='feedbacks'>
            {filtered.map((data, index) => (
                <FeedbackItem data={data} key={index}/>
            ))}
        </div>
    )
}
