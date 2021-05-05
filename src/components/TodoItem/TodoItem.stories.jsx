
import React from "react";
import TodoItem from "./TodoItem";
import Input from "./../Input";
import Checkbox from './../Checkbox';

const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  TextInput: (
    <Input
      type="text"
      placeholder="Create a new todo"
      name="new-todo"
      id="new-todo"
    />
  ),
  Checkbox: (
    <Checkbox name="field-checkbox" id="field-checkbox" />
  )
}

export default {
  title: 'Todo list/Todo item',
  component: TodoItem
};
