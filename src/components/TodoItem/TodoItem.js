import React from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List } from 'antd';
const { Item } = List;
const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleSelectTodo,
  showModalEdit,
  idx,
}) => {
  const helperPriority = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };
  const helperStatus = { 1: 'To-do', 2: 'In Progress', 3: 'Done' };

  return (
    <Item>
      <Item.Meta avatar={idx + 1} description={todo.description} />
      <div>-- {todo.title} -- </div>
      <div>-- {helperPriority[todo.priority]} -- </div>
      <div>-- {helperStatus[todo.status]} -- </div>
      <div className="date">{todo.date.dateString}</div>
      <div className="modal-actions">
        <DeleteOutlined
          className="action-icon"
          style={{ fontSize: '1rem' }}
          onClick={() => {
            handleDeleteTodo({ id: todo.id });
          }}
        />
        <EditOutlined
          className="action-icon"
          style={{ fontSize: '1rem' }}
          onClick={() => {
            handleSelectTodo({ id: todo.id });
            showModalEdit();
          }}
        />
      </div>
    </Item>
  );
};

export default TodoItem;
