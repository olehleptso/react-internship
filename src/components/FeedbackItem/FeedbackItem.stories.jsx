import React from 'react';
import FeedbackItem from './FeedbackItem';

export default {
  title: 'FeedbackItem',
  component: FeedbackItem,
};

const Template = (args) => <FeedbackItem {...args} />;

export const Standart = Template.bind({});

Standart.args = {
  data: {
      id: "1",
      firstname: "Oleh",
      lastname: "Manskih",
      phone: "",
      mail: "",
      department: "",
      feedbackText: "This is a perfect starting message because it doesn’t require the customer to give up plenty of personal data, which reduces overall friction and leads to more online reviews.",
      rating: 5
    }
}