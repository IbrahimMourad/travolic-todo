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
  location,
}) => {
  return (
    <Item>
      <Item.Meta avatar={idx + 1} description={todo.description} />
      <div className="modal-actions">
        <DeleteOutlined
          className="action-icon"
          style={{ fontSize: '1rem' }}
          onClick={() => {
            handleDeleteTodo({ location, id: todo.id });
          }}
        />
        <EditOutlined
          className="action-icon"
          style={{ fontSize: '1rem' }}
          onClick={() => {
            handleSelectTodo({ location, id: todo.id });
            showModalEdit();
          }}
        />
      </div>
    </Item>
  );
};

export default TodoItem;
