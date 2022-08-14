import React from 'react';
import FeedbackForm from './FeedbackForm';

export default {
  title: 'FeedbackForm',
  component: FeedbackForm,
};

const Template = (args) => <FeedbackForm {...args} />;

export const Standart = Template.bind({});

Standart.args = {
  
}