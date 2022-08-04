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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFeedback({...feedback,[name]:value})
    }

    const send = () => console.log(feedback)

    return (
        <Modal>
            <div className='form'>
                <div className='form-inner'>
                    <div className='input-container'>
                        <div className='name-container'>
                            <input 
                                name="firstname"
                                className='input'
                                placeholder='First Name' 
                                onChange={handleChange}
                            />
                            <input 
                                name="lastname"
                                className='input'
                                placeholder='Last Name' 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='input-container'>
                        <input 
                            name="phone"
                            className='input'
                            placeholder='Phone' 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <input 
                            name="mail"
                            className='input'
                            placeholder='Mail' 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <select 
                            name="department"
                            className='input'
                            onChange={handleChange}
                        >
                            <option value='' disabled>Select Department</option>
                            <option value='Development' >Development</option>
                            <option value='Testing' >Testing</option>
                            <option value='Marketing' >Marketing</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <textarea 
                            name="feedbackText"
                            className='input'
                            placeholder='Enter feedback'
                            onChange={handleChange}
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
                            name="agreement"
                            className="check" 
                            type="checkbox" 
                            value={feedback.agreement}
                            onChange={(event) => setFeedback({...feedback, agreement:event.target.checked})}
                        />
                        I agree to the processing of personal data
                    </div>
                    <div className='controls'>
                        <Button styles='primary' text='submit' onclick={send}/>
                        <Button styles='primary' text='cancel' onclick={()=> closeModal(false)}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FeedbackForm