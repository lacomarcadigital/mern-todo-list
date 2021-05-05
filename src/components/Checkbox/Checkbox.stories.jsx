
import React from "react";
import Checkbox from "./Checkbox";

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'testing-checkbox',
  id: 'testing-checkbox'
}

export default {
  title: 'Form components/Checkbox',
  component: Checkbox
};
