
import React from "react";
import Input from "./Input";

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Default input",
  name: "default",
  id: "default"
}

export default {
  title: 'Form Components/Input',
  component: Input
};
