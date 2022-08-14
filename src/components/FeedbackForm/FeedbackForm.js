import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './FeedbackForm.css'
import axios from 'axios'



 function FeedbackForm({closeModal, onSubmit}) {
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
    
    const initialErrors = {
        firstname: { error:'', valid: false },
        lastname: { error:'', valid: false },
        mail: { error:'', valid: false },
        department: { error:'', valid: false },
        feedbackText: { error:'', valid: false },
        rating: { error:'', valid: false },
        agreement: { error:'', valid: false }
    };

    const [feedback, setFeedback] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors);
    const [hover, setHover] = useState(0);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFeedback({...feedback,[name]:value})
    }

    const validate = (name, value) => {
        switch(name){
            case 'firstname':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"First name is required!", valid: false}}) 
                } else if(value.length < 3) {
                    setFormErrors({...formErrors, [name]: {error:"First name must be longer that 2 symbols", valid: false}}) 
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            case 'lastname':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Last name is required!", valid: false}}) 
                } else if(value.length < 3) {
                    setFormErrors({...formErrors, [name]: {error:"Last name must be longer that 2 symbols", valid: false}}) 
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            case 'mail':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Email is required!", valid: false}}) 
                } else if (!value.match(/@/)) {
                    setFormErrors({...formErrors, [name]: {error:"This is not a valid email format!", valid: false}}) 
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            case 'department':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Choose a department", valid: false}})
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            case 'feedbackText':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Enter a feedback text", valid: false}})
                } else if(value.length <10) {
                    setFormErrors({...formErrors, [name]: {error:"Feedback must be longer that 100 symbols", valid: false}})
                } else if(value.length >150) {
                    setFormErrors({...formErrors, [name]: {error:"Feedback must be shorter that 150 symbols", valid: false}})
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            case 'rating':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Choose rating", valid: false}})
                }
                break;
            case 'agreement':
                if (!value) {
                    setFormErrors({...formErrors, [name]: {error:"Agreement required", valid: false}})
                } else {
                    setFormErrors({
                      ...formErrors,
                      [name]: { valid: true, error: '' }
                    });
                }
                break;
            default: 
                break;
        }
      };

    const validationHandler = (event) => {
        validate(event.target.name, event.target.value)
    }

    const handleSubmit = (e) => {
        let validated = false;
        e.preventDefault();
        setFormErrors(validateAll(feedback));
        Object.values(formErrors).map((data) => {
            console.log(data)
            if (data.valid === true) {
                validated = true 
            } else {
                validated = false
            }
            
        })
        if (validated === true) {
            onSubmit(feedback);
            closeModal();
        }
        
    };
    
    const validateAll = (values) => {
        const errors = {
            firstname: { error:'', valid: true },
            lastname: { error:'', valid: true },
            mail: { error:'', valid: true },
            department: { error:'', valid: true },
            feedbackText: { error:'', valid: true },
            rating: { error:'', valid: true },
            agreement: { error:'', valid: true }
        };

        if (!values.firstname) {
            errors.firstname.error = "First name is required!";
            errors.firstname.valid = false
          } else if(values.firstname.length < 3) {
              errors.firstname.error = "First name must be longer that 2 symbols"
              errors.firstname.valid = false
          }
          if (!values.lastname) {
              errors.lastname.error = "Last name is required!";
              errors.lastname.valid = false
              
          } else if(values.lastname.length < 3) {
              errors.lastname.error = "Last name must be longer that 2 symbols"
              errors.lastname.valid = false
          }
          if (!values.mail) {
            errors.mail.error = "Email is required!";
            errors.mail.valid = false
          } else if (!values.mail.match(/@/)) {
            errors.mail.error = "This is not a valid email format!";
            errors.mail.valid = false
          }
          if (!values.department) {
            errors.department.error = "Choose a department";
            errors.department.valid = false
          }
          if (!values.feedbackText) {
              errors.feedbackText.error = "Enter a feedback text";
              errors.feedbackText.valid = false
          } else if(values.feedbackText.length <10) {
              errors.feedbackText.error = "Feedback must be longer that 100 symbols"
              errors.feedbackText.valid = false
          }
          else if(values.feedbackText.length >150) {
              errors.feedbackText.error = "Feedback must be shorter that 150 symbols"
              errors.feedbackText.valid = false
          }
          if (!values.rating) {
              errors.rating.error = "Choose rating";
              errors.rating.valid = false
          }
          if (!values.agreement) {
              errors.agreement.error = "Agreement required";
              errors.agreement.valid = false
          }
          return errors;
    }


    return (
            <div className='form'>
                <form className='form-inner' onSubmit={handleSubmit}>
                    <label>
                        <input 
                            name="firstname"
                            value={feedback.firstname}
                            className='input'
                            placeholder='First Name' 
                            onChange={handleChange}
                            onBlur={validationHandler}
                        />
                        {!formErrors.firstname.valid ? <span className='error'>{formErrors.firstname.error}</span>:''}
                        </label>
                    <label>
                    <input 
                                name="lastname"
                                value={feedback.lastname}
                                className='input'
                                placeholder='Last Name' 
                                onChange={handleChange}
                                onBlur={validationHandler}
                            />
                            {!formErrors.lastname.valid ? <span className='error'>{formErrors.lastname.error}</span>:''}
                    </label>
                    <label>
                        <input 
                            name="phone"
                            value={feedback.phone}
                            className='input'
                            placeholder='Phone' 
                            onChange={handleChange}
                            onBlur={validationHandler}
                        />
                    </label> 
                    <label>
                        <input 
                                name="mail"
                                value={feedback.mail}
                                className='input'
                                placeholder='Mail' 
                                onChange={handleChange}
                                onBlur={validationHandler}
                        />
                        {!formErrors.mail.valid ? <span className='error'>{formErrors.mail.error}</span>:''}
                    </label>      
                    <label>
                        <select 
                            name="department"
                            value={feedback.department}
                            className='input'
                            onChange={handleChange}
                        >
                            <option value='' disabled>Select Department</option>
                            <option value='Development' >Development</option>
                            <option value='Testing' >Testing</option>
                            <option value='Marketing' >Marketing</option>
                        </select>
                        {!formErrors.department.valid ? <span className='error'>{formErrors.department.error}</span>:''}
                    </label>
                    <label>
                        <textarea 
                            name="feedbackText"
                            value={feedback.feedbackText}
                            className='input'
                            placeholder='Enter feedback'
                            onChange={handleChange}
                            onBlur={validationHandler}
                        />
                        {!formErrors.feedbackText.valid ? <span className='error'>{formErrors.feedbackText.error}</span>:''}
                    </label>
                    <label>
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
                        {!formErrors.rating.valid ? <span className='error'>{formErrors.rating.error}</span>:''}
                    </label>
                    <label>
                        <input 
                            name="agreement"
                            className="check" 
                            type="checkbox" 
                            value={feedback.agreement}
                            onChange={(event) => setFeedback({...feedback, agreement:event.target.checked})}
                        />
                        I agree to the processing of personal data
                        {!formErrors.agreement.valid ? <span className='error'>{formErrors.agreement.error}</span>:''}
                    </label>    
                    <div className='controls'>
                        <Button styles='primary' text='submit' type='submit' />
                        <Button styles='primary' text='cancel' onclick={()=> closeModal(false)}/>
                    </div>
                </form>
            </div>
    )
}

export default FeedbackForm;