import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './FeedbackForm.css'

 function FeedbackForm({closeModal}) {
    const initialValues = {
        firstname: '',
        lastname: '',
        phone: '',
        mail: '',
        department: '',
        feedbackText: '',
        rating: 0, 
        agreement: false
    }
    const [feedback, setFeedback] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const [hover, setHover] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFeedback({...feedback,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(feedback));
        setIsSubmit(true);
        console.log(feedback)
    };
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
          errors.firstname = "First name is required!";
        } else if(values.firstname.length < 3) {
            errors.firstname = "First name must be longer that 2 symbols"
        }
        if (!values.lastname) {
            errors.lastname = "Last name is required!";
        } else if(values.lastname.length < 3) {
            errors.lastname = "Last name must be longer that 2 symbols"
        }
        if (!values.mail) {
          errors.mail = "Email is required!";
        } else if (!regex.test(values.mail)) {
          errors.mail = "This is not a valid email format!";
        }
        if (!values.department) {
          errors.department = "Choose a department";
        }
        if (!values.feedbackText) {
            errors.feedbackText = "Enter a feedback text";
        } else if(values.feedbackText.length <100) {
            errors.feedbackText = "Feedback must be longer that 100 symbols"
        }
        else if(values.feedbackText.length >150) {
            errors.feedbackText = "Feedback must be shorter that 150 symbols"
        }
        if (!values.rating) {
            errors.rating = "Choose rating";
        }
        if (!values.agreement) {
            errors.agreement = "Agreement required";
        }
        

        return errors;
      };

    return (

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
                            <p>{formErrors.firstname}</p>
                            <input 
                                name="lastname"
                                className='input'
                                placeholder='Last Name' 
                                onChange={handleChange}
                            />
                            <p>{formErrors.lastname}</p>
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
                        <div className='error'>
                            <p>{formErrors.mail}</p>
                        </div>

                    </div>
                    <div className='input-container'>
                        <select 
                            name="department"
                            className='input'
                            onChange={handleChange}
                        >
                            <option value='' disabled selected>Select Department</option>
                            <option value='Development' >Development</option>
                            <option value='Testing' >Testing</option>
                            <option value='Marketing' >Marketing</option>
                        </select>
                        <p>{formErrors.department}</p>
                    </div>
                    <div className='input-container'>
                        <textarea 
                            name="feedbackText"
                            className='input'
                            placeholder='Enter feedback'
                            onChange={handleChange}
                        />
                        <p>{formErrors.feedbackText}</p>
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
                        <p>{formErrors.rating}</p>
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
                        <p>{formErrors.agreement}</p>
                    </div>
                    <div className='controls'>
                        <Button styles='primary' text='submit' onclick={handleSubmit}/>
                        <Button styles='primary' text='cancel' onclick={()=> closeModal(false)}/>
                    </div>
                </div>
            </div>
    )
}

export default FeedbackForm