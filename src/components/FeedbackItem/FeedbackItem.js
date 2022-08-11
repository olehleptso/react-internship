import React from 'react'
import './FeedbackItem.css'
import Text from '../Text/Text'

export default function FeedbackItem({data}) {


    return (
        <div className='item'>
            <Text styles="bold" text={data.firstname}/>
            <div className='rating'>
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                        <button   
                            type="button"
                            key={index}
                            className={index <= data.rating ? "on" : "off"}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                        );
                    })}
                </div>
            </div>
            <Text styles="gray" text={data.feedbackText}/>
        </div>
    )
}
