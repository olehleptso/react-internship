import React from 'react';
import Header from './Header';
import logo from '../../images/logo.png';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => {
  return (
    <div className="header"  id="home">
      <img src={logo} alt="Logo"/>
      <div className="header-menu">
          <ul className="header-nav">
              {args.items.map((data) => (
                  <li key={data.id}>
                      <a href={data.to}>{data.name}</a>
                  </li>
              ))}
          </ul>
      </div>
    </div>
  )
}

export const Standart = Template.bind({});

Standart.args = {
  items: [
    {
      id: 1,
      name: "home",
      to: "#home"
    },
    {
      id: 2,
      name: "about",
      to: "#about"
    },
    {
      id: 3,
      name: "projects",
      to: "#projects"
    },
    {
      id: 4,
      name: "process",
      to: "#process"
    },
    {
      id: 5,
      name: "services",
      to: "#services"
    },
    {
      id: 6,
      name: "feedbacks",
      to: "#feedbacks"
    }
  ]
};