import React from 'react';
import ServicesItem from './ServicesItem';

export default {
  title: 'ServicesItem',
  component: ServicesItem,
};

const Template = (args) => <ServicesItem {...args} />;

export const Service = Template.bind({});

Service.args = {
    data: {
        name: 'primary',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
};