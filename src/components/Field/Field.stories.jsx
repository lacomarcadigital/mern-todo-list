
import React from "react";
import Field from "./Field";

const Template = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim, dolores tenetur, quo nulla, necessitatibus soluta voluptatum neque laboriosam dolorum molestias! Quas impedit unde, similique repellat obcaecati reiciendis commodi minus?</p>
  )
}

export default {
  title: 'Form components/Field',
  component: Field
};
