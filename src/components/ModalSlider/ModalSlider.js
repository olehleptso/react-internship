import { useState } from 'react';
import React from 'react'
import './ModalSlider.css';

function ModalSlider({closeModal, data}) {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  
  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : data.length - 1;
    setCurrentSlide(index);
  }
  
  const next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  return (
    <div className='modal-background'>
      <div className='modal-controls'>
        <button onClick={()=>closeModal(false)}>back</button>
        <button className='previous btn' onClick={prev}>{'< '}previous project</button>
        <button className='next btn' onClick={next}>next project{' >'}</button>
        <button onClick={()=>closeModal(false)}>X</button>
      </div>
      <div className='modal'>
        <div className='images-container' style={{ transform: `translate(-${currentSlide * 100}%)`}}>
          {data.map((data, index) => {
            return <img src={data} key={index} className='modal-image'/>
          })}
        </div>
      </div>
    </div>
      
  )
}

export default ModalSlider;