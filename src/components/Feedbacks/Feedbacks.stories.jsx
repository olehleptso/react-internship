import React from 'react';
import Feedbacks from './Feedbacks';

export default {
  title: 'Feedbacks',
  component: Feedbacks,
};

const Template = (args) => <Feedbacks {...args} />;

export const Standart = Template.bind({});

Standart.args = {
  data: [
    {
      id: "1",
      firstname: "Oleh",
      lastname: "Manskih",
      phone: "",
      mail: "",
      department: "",
      feedbackText: "This is a perfect starting message because it doesn’t require the customer to give up plenty of personal data, which reduces overall friction and leads to more online reviews.",
      rating: 5
    },
    {
      id: "2",
      firstname: "Max",
      lastname: "Karsi",
      phone: "",
      mail: "",
      department: "",
      feedbackText: "This is a perfect starting message because it doesn’t require the customer to give up plenty of personal data, which reduces overall friction and leads to more online reviews.",
      rating: 4
    }
  ]
}