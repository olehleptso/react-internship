import React from 'react';
import ModalSlider from './ModalSlider';

export default {
  title: 'ModalSlider',
  component: ModalSlider,
};

const Template = (args) => <ModalSlider {...args} />;

export const Slider = Template.bind({});

Slider.args = {
  data: [
    {
      "url": "https://thumbs.dreamstime.com/b/blossom-sunny-field-9110376.jpg",
      "id": "0"
    },
    {
      "url": "https://media.istockphoto.com/photos/golden-wheat-field-under-beautiful-sunset-sky-picture-id815712236?k=20&m=815712236&s=612x612&w=0&h=Oe3tDtyGPDus_dWzWr1UChKo7PY-3g-8TgqbtBteZ2s=",
      "id": "1"
    },
    {
      "url": "https://media.istockphoto.com/photos/beautiful-sunset-on-green-field-picture-id501812920?k=20&m=501812920&s=612x612&w=0&h=Q2n2fEdoACDq9XcijP8q_7c3XYpsJfw7nsc7DYKTLlM=",
      "id": "2"
    },
    {
      "url": "https://img.freepik.com/free-photo/harvested-grain-field-captured-sunny-day-with-some-clouds-germany_181624-29772.jpg",
      "id": "3"
    }
  ]
    
};