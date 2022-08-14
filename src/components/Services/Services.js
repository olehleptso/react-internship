import React, { useState } from 'react'
import ServicesItem from '../ServicesItem/ServicesItem'
import './Services.css'

function Services() {
    const initialServices = [
        {name:"UI / UX DESIGN", desc:"Be set fourth land god darkness make it wherein own"},
        {name:"WEB DEVELOPMENT", desc:"A she'd them bring void moving third she'd kind fill"},
        {name:"APP / MOBILE", desc:"Dominion man second spirit he, earth they're creeping"},
        {name:"GAME DESIGN", desc:"Morning his saying moveth it multiply appear life be"},
        {name:"SEO / MARKETING", desc:"Give won't after land fill creeping meat you, may"},
        {name:"PHOTOGRAPHY", desc:"Creepeth one seas cattle grass give moving saw give"},
        {name:"GRAPHIC DESIGN", desc:"Open, great whales air rule for, fourth life whales"},
        {name:"ILLUSTRATIONS", desc:"Whales likeness hath, man kind for them air two won't"},

    ]
    const [services, setServices] = useState(initialServices)

    
    const show = () => {
        console.log(services)
    }

    return (
        <div className='services' id="services" data-testid="Services">
            <div className='services-inner'>
                {services.map((data, index) => {
                    return <ServicesItem data={data} key={index}></ServicesItem>
                })}
            </div>
        </div>
    )
}

export default Services