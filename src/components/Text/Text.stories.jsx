import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Title = Template.bind({});

Title.args = {
  styles: 'title',
  text: 'Example text'
};

export const Gray = Template.bind({});

Gray.args = {
  styles: 'gray',
  text: 'Example text'
};

export const Bold = Template.bind({});

Bold.args = {
  styles: 'bold',
  text: 'Example text'
};