import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './FeedbackForm.css'

 function FeedbackForm({closeModal}) {
    
    const [feedback, setFeedback] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        mail: '',
        department: '',
        feedbackText: '',
        rating: 0,
        agreement: false
    })
    const [hover, setHover] = useState(0);



    return (
        <Modal>
            <div className='form'>
                <div className='form-inner'>
                    <div className='input-container'>
                        <div className='name-container'>
                            <input 
                                className='input'
                                placeholder='First Name' 
                                onChange={(event) => {
                                    setFeedback({...feedback, firstname:event.target.value})
                                    console.log(feedback)
                                }}
                            />
                            <input 
                                className='input'
                                placeholder='Last Name' 
                                onChange={(event) => {
                                    setFeedback({...feedback, lastname:event.target.value})
                                    console.log(feedback)
                                }}
                            />
                        </div>
                    </div>
                    <div className='input-container'>
                        <input 
                            className='input'
                            placeholder='Phone' 
                            onChange={(event) => {
                                setFeedback({...feedback, phone:event.target.value})
                                console.log(feedback)
                            }}
                        />
                    </div>
                    <div className='input-container'>
                        <input 
                            className='input'
                            placeholder='Mail' 
                            onChange={(event) => {
                                setFeedback({...feedback, mail:event.target.value})
                                console.log(feedback)
                            }}
                        />
                    </div>
                    <div className='input-container'>
                        <select 
                            className='input'
                            onChange={(event) => {
                                setFeedback({...feedback, department:event.target.value})
                                console.log(feedback)
                            }}
                        >
                            <option value='' disabled>Select Department</option>
                            <option value='Development' >Development</option>
                            <option value='Testing' >Testing</option>
                            <option value='Marketing' >Marketing</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <textarea 
                            className='input'
                            placeholder='Enter feedback'
                            onChange={(event) => {
                                setFeedback({...feedback, feedbackText:event.target.value})
                                console.log(feedback)
                            }}
                        />
                    </div>
                    <div className='input-container'>
                        <div className="star-rating">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                <button   
                                    type="button"
                                    key={index}
                                    className={index <= (hover || feedback.rating) ? "on" : "off"}
                                    onClick={() => setFeedback({...feedback, rating:index})}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(feedback.rating)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className='input-container'>
                        <input 
                            className="check" 
                            type="checkbox" 
                            value={feedback.agreement}
                            onChange={(event) => setFeedback({...feedback, agreement:event.target.checked})}
                        />
                        I agree to the processing of personal data
                    </div>
                    <div className='controls'>
                        <Button styles='primary' text='submit'/>
                        <Button styles='primary' text='cancel' onclick={()=> closeModal(false)}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FeedbackForm