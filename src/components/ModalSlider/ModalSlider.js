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
        <div className='modal-btn-container'>
          <button className="modal-btn" onClick={prev}>{'<'}</button>
          <button className="modal-btn" onClick={()=>closeModal(false)}>X</button>
          <button className="modal-btn" onClick={next}>{'>'}</button>
        </div>
        <div className='modal-indicator-container'>
          {data.map((data, index) => {
            return <button 
            style={{
              backgroundColor: data.id==currentSlide? 'rgba(255, 255, 255, 0.8)' : '',
            }}
            className="modal-indicator"
            onClick={()=> {
              setCurrentSlide(data.id)
            }} 
            key={index}/>
            })}
        </div>
      </div>
      <div className='modal'>
        <div className='images-container' style={{ transform: `translate(-${currentSlide * 100}%)`}}>
          {data.map((data, index) => {
            return <img src={data.url} key={index} className='modal-image'/>
          })}
        </div>
      </div>
    </div>
      
  )
}

export default ModalSlider;