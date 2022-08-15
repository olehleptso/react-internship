import { useState } from 'react';
import React from 'react'
import './ModalSlider.css';
import Modal from '../Modal/Modal';

function ModalSlider({closeModal, data}) {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSingle, setIsSingle] = useState(false);
  const [active, setActive] = useState(true);
  
  
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
    <div className='mdl'>
      <Modal close={
      ()=> {
          setActive(!active)
          setTimeout(()=>closeModal(false), 500);
      }} opened={active}>
      </Modal>
        {isSingle ? 
        <div className='modal-controls'>
          <div className='modal-btn-container'>
            <span className="arrow" onClick={back}>&#60;</span>
          </div> 
        </div>
        : 
        <div className='modal-controls'>
          <div className='modal-btn-container'>
            <span className="arrow" onClick={prev}>&#129080;</span>
            <span className="arrow" onClick={()=>{
              setActive(!active)
              setTimeout(()=>closeModal(false), 500)
            }}>&#10006;</span>
            
            <span className="arrow" onClick={next}>&#129082;</span>
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
    </div>
    
    
      
  )
}

export default ModalSlider;