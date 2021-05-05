
import React from "react";
import TodoList from './TodoList';

// Simulamos la respuesta del back, la cual estaría
// previamente diseñada.
const todoListMock = [
  { id: '507f1f77bcf86cd799439011', text: 'Aniram al ne etatsila 1', completed: false },
  { id: '507f1f77bcf86cd799439012', text: 'Aniram al ne etatsila 2', completed: false },
  { id: '507f1f77bcf86cd799439013', text: 'Aniram al ne etatsila 3', completed: false },
  { id: '507f1f77bcf86cd799439014', text: 'Aniram al ne etatsila 4', completed: false },
  { id: '507f1f77bcf86cd799439015', text: 'Aniram al ne etatsila 5', completed: false },
  { id: '507f1f77bcf86cd799439016', text: 'Aniram al ne etatsila 6', completed: false },
];

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todoItems: todoListMock
}

export default {
  title: 'Todo list/List',
  component: TodoList
};
