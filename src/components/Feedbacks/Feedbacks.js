import React, { useState, useEffect } from 'react'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './Feedbacks.css'

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    const [toShow, setToShow] = useState([])

    

    const filter = () => feedbacks ? feedbacks.filter((item) => item.rating >= 3.5).slice(-3).reverse()  : null;

    useEffect(()=>{
        async function getFeedbacks() {
            const response = await fetch('http://localhost:4000/feedbacks');
            const res = await response.json();
            setFeedbacks(res);
        }
        getFeedbacks();
        setToShow(filter)
    }, []);

    return (
        <div className='feedbacks'>
            {toShow.map((data, index) => (
                <FeedbackItem data={data} key={index}/>
            ))}
        </div>
    )
}
