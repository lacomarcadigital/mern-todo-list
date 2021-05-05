
import React from "react";
import Input from "./Input";
import Field from "./../Field/Field";

const Template = (args) => (
  <Field>
    <Input {...args} />
  </Field>
);

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
