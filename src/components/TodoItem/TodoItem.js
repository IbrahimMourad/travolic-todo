import React, { useState } from 'react';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import FormComponent from '../FormComponent/FormComponent';

const TodoItem = ({ todo, handleDeleteTodo, handleSelectTodo }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModalEdit = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const helperPriority = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };
  const helperStatus = { 1: 'To-do', 2: 'In Progress', 3: 'Done' };

  return (
    <Card title={todo.title}>
      <div>{todo.description} </div>
      <div>{helperPriority[todo.priority]} </div>
      <div>{helperStatus[todo.status]} </div>
      <div className="date">{todo.date.dateString}</div>
      <div className="user text-capitalize">{todo.assignedUser}</div>
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
      <FormComponent
        id={todo.id}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        type="edit"
      />
    </Card>
  );
};

export default TodoItem;
