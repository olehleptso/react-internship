import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './Feedbacks.css'


export default function Feedbacks({data}) {
 
    return (
        <div className='feedbacks'>
            {data.map((data, index) => (
                <FeedbackItem data={data} key={index}/>
            ))}
        </div>
    )
}
