import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './FeedbackForm.css'

 function FeedbackForm({closeModal}) {
    
    const [feedback, setFeedback] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        mail: ''
    })

    return (
        <Modal>
            <div className='form'>
                <div className='form-inner'>
                    <div className='name-container'>
                        <input placeholder='firstname' onChange={(event) => {
                            setFeedback({...feedback, firstname:event.target.value})
                            console.log(feedback)
                        }}/>
                        <input placeholder='lastname' onChange={(event) => {
                            setFeedback({...feedback, lastname:event.target.value})
                            console.log(feedback)
                        }}/>
                    </div>
                    <input placeholder='phone' onChange={(event) => {
                        setFeedback({...feedback, phone:event.target.value})
                        console.log(feedback)
                    }}/>
                    <input placeholder='mail' onChange={(event) => {
                        setFeedback({...feedback, mail:event.target.value})
                        console.log(feedback)
                    }}/>
                    <button onClick={()=> closeModal(false)}>Exit</button>
                </div>
                
            </div>
        </Modal>
    )
}

export default FeedbackForm