import React from 'react'
import './Process.css'
import Text from '../Text/Text';

function Process() {
  return (
    <div className='process' id="process" data-testid="Process">
        <div className='process-inner'>
            <Text styles="title" text="Our Work Process"/>
            <Text styles="gray" 
            text="Was years it seasons was there form he in in them together over that,
                third sixth gathered female creeping bearing behold years."
            />
            <div className='video'>
                <button className='play'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17">
                        <path fill="#fff" d="M10.999 8.5L0 .002v16.996L11 8.5"></path>
                    </svg>
                </button>
                
            </div>
        </div>
        
    </div>
  )
}

export default Process;