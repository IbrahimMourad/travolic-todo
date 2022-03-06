import React, { useState } from 'react';
import { Button, Input, Modal, Typography, DatePicker } from 'antd';
import { Select } from 'antd';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

const { Option } = Select;

const AddForm = ({ isModalVisible, handleCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [dateObj, setDateObj] = useState({});
  const [priority, setPriority] = useState('low');
  const [status, setStatus] = useState('to-do');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    // "27-11-2020"
    dispatch(
      addTodo({
        title,
        description,
        date: dateObj,
        priority,
        status,
      })
    );
    setTitle('');
    setDescription('');
    setDateObj({});
    handleCancel();
  };
  function onChange(date, dateString) {
    console.log(dateString);
    setDateObj({ timestamp: date._d.getTime(), dateString });
  }
  // console.log(priority);
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
      <DatePicker format={'DD/MM/YYYY'} onChange={onChange} />
      <Select
        defaultValue="low"
        style={{ width: 120 }}
        onChange={(value) => setPriority(value)}
      >
        <Option value={1}>Low</Option>
        <Option value={2}>Medium</Option>
        <Option value={3}>High</Option>
      </Select>
      <Select
        defaultValue="to-do"
        style={{ width: 120 }}
        onChange={(value) => setStatus(value)}
      >
        <Option value={1}>To-Do</Option>
        <Option value={2}>In Progress</Option>
        <Option value={3}>Done</Option>
      </Select>
    </Modal>
  );
};

export default AddForm;
