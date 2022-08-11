import React from 'react'
import './ServicesItem.css'
import Text from '../Text/Text';
import diamond from '../../images/diamond.png'

function ServicesItem({data}) {
  return (
    <div className='services-item'>
        <div className='services-icon'>
            <img src={diamond}></img>
        </div>
        <Text styles='title' text={data.name}/>
        <Text styles='gray' text={data.desc}/>
    </div>
  )
}

export default ServicesItem;