import { useState } from 'react';
import React from 'react'
import './ModalSlider.css';
import Modal from '../Modal/Modal';

function ModalSlider({closeModal, data}) {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSingle, setIsSingle] = useState(false);
  
  
  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : data.length - 1;
    setCurrentSlide(index);
  }
  
  const next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  const back = () => {
    setIsSingle(false)
  }



  return (
    <Modal>
        {isSingle ? 
        <div className='modal-controls'>
          <div className='modal-btn-container'>
            <button className="modal-btn" onClick={back}>{'<'}</button>
          </div> 
        </div>
        : 
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
              backgroundColor: data.id==currentSlide ? 'rgba(255, 255, 255, 0.8)' : '',
            }}
            className="modal-indicator"
            onClick={()=> {
              setCurrentSlide(data.id)
            }} 
            key={index}/>
            })}
          </div>
          </div>
        }
      <div className='modal-slider'>
        {isSingle ? 
        <div className='modal-single'>
          <img src={data[currentSlide].url} className='modal-image'/>
        </div> 
        : 
        <div className='images-container' style={{ transform: `translate(-${currentSlide * 100}%)`}}>
          {data.map((data, index) => {
            return <img src={data.url} key={index} className='modal-image' onClick={() => setIsSingle(true)}/>
          })}
        </div>}
      </div>
    </Modal>
      
  )
}

export default ModalSlider;