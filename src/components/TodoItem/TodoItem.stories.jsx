
import React from "react";
import TodoItem from "./TodoItem";
import Input from "./../Input";

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
  )
}

export default {
  title: 'Todo list/Todo item',
  component: TodoItem
};
