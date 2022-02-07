import React, { useState, useEffect } from 'react';
import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../store/todoSlice';
const EditForm = ({ isModalVisible, handleCancel }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState('');

  const handleEditTodo = () => {
    dispatch(editTodo(todo));
    handleCancel();
  };

  useEffect(() => {
    setTodo(selected);
  }, [selected]);

  return (
    <Modal
      title="Edit Todo"
      centered
      visible={isModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleEditTodo}>
          Edit
        </Button>,
      ]}
    >
      <Input
        placeholder="Edit Your Todo"
        size="large"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
    </Modal>
  );
};

export default EditForm;
