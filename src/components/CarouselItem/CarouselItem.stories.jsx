import React from 'react';
import CarouselItem from './CarouselItem';

export default {
  title: 'CarouselItem',
  component: CarouselItem,
};

const Template = (args) => <CarouselItem {...args} />;

export const Service = Template.bind({});

Service.args = {
  data: {
    name: "Sunny Fields",
    description: "Litht his cant a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly from. In. Said given lights Sixth the male. Upon their multiply. Kind best. Him tree Upon",
    short: "Cattle. Dominion day herb shed creeping divide darkness. Which. Subdue had",
    client: "Emma Moris",
    date: "25.06.2017",
    share: "Facebook, Twitter, Pinterest",
    main: "https://picjumbo.com/wp-content/uploads/beautiful-green-field-scenery-free-photo-2210x1473.jpg"
  }

};