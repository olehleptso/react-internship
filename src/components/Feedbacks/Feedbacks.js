import React, { useState, useEffect } from 'react'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './Feedbacks.css'

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(()=>{
        async function getFeedbacks() {
            const response = await fetch('http://localhost:4000/feedbacks');
            const res = await response.json();
            setFeedbacks(res);
        }
        getFeedbacks();
    }, []);



    return (
        <div className='feedbacks'>
            {feedbacks.map((data, index) => (
                <FeedbackItem data={data} key={index}/>
            ))}
        </div>
    )
}
