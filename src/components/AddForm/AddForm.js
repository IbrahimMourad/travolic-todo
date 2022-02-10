import React, { useRef } from 'react';
import { Button, Input, Modal, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
const AddForm = ({ isModalVisible, handleCancel }) => {
  const todo = useRef('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    dispatch(addTodo(todo.current.state.value));
    todo.current.state.value = '';
    handleCancel();
  };

  return (
    <Modal
      title={
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          Add Todo
        </Typography.Title>
      }
      centered
      visible={isModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleAddTodo}>
          Add
        </Button>,
      ]}
    >
      <Input placeholder="Enter Todo Description" size="large" ref={todo} />
    </Modal>
  );
};

export default AddForm;
