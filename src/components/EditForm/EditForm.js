import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../store/todoSlice';
const EditForm = ({ isModalVisible, handleCancel }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.todo);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();

  const handleEditTodo = () => {
    dispatch(editTodo({ ...selected, title, description }));
    handleCancel();
  };
  useEffect(() => {
    // console.log(selected);
    setDescription(selected.description);
    setTitle(selected.title);
  }, []);

  return (
    <Modal
      title={
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          Edit Todo
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
        <Button key="submit" type="primary" onClick={handleEditTodo}>
          Edit
        </Button>,
      ]}
    >
      <Input
        placeholder="Title"
        size="large"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Edit Your Todo"
        size="large"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};

export default EditForm;
