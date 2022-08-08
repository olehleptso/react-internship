import React from 'react'
import './FeedbackItem.css'
import Text from '../Text/Text'

export default function FeedbackItem({data}) {


    return (
        <div className='item'>
            <Text styles="bold" text={data.firstname}/>
            <div className='rating'>
                <Text styles="bold" text="Rating: "/>
                <Text styles='gray' text={data.rating}/>
            </div>
            <Text styles="gray" text={data.feedbackText}/>
        </div>
    )
}
