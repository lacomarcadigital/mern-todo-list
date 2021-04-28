import React from "react";
import Panel from "./Panel";

const Template = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>Hello React!</p>
  )
}

export const PanelWithPadding = Template.bind({});
PanelWithPadding.args = {
  hasPadding: true,
  children: (
    <p className="panel__paragraph">Hello world</p>
  )
}

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    hasPadding: { control: "boolean" },
  },
};
