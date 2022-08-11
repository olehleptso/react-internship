import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-inner'>
            <div className='inc'>
                <div>
                    <h3>Piroll Design, Inc.</h3>
                    <p className='footer-text'>© 2017 Piroll. All rights reserved.</p>
                    <p className='footer-text'>Designed by robirurk.</p>
                </div>
            </div>
            <div className='inc'>
                <div>
                    <p className='footer-text'>hello@pirolltheme.com</p>
                    <p className='footer-text'>+44 987 065 908</p>
                </div>
            </div>
            <div className='inc'>
                    <ul>
                        <li><a href="#home" className='footer-text'>Home</a></li>
                        <li><a href="#" className='footer-text'>About</a></li>
                        <li><a href="#" className='footer-text'>Services</a></li>
                        <li><a href="#" className='footer-text'>Clients</a></li>
                    </ul>
                    <ul>
                        <li><a href="#" className='footer-text'>Projects</a></li>
                        <li><a href="#" className='footer-text'>Numbers</a></li>
                        <li><a href="#" className='footer-text'>Contact</a></li>
                        <li><a href="#" className='footer-text'>Legals</a></li>
                    </ul>
            </div>
            <div className='inc'>
                    <ul>
                        <li><a href="#" className='footer-text'>Facebook</a></li>
                        <li><a href="#" className='footer-text'>Twitter</a></li>
                        <li><a href="#" className='footer-text'>Instagram</a></li>
                        <li><a href="#" className='footer-text'>Dribble</a></li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;