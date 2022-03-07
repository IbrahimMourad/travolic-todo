import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Input,
  Modal,
  Typography,
  DatePicker,
  Select,
  Form,
} from 'antd';

import { editTodo, addTodo } from '../../store/todoSlice';

const { Option } = Select;

const FormComponent = ({ isModalVisible, handleCancel, type }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateObj, setDateObj] = useState({});
  const [priority, setPriority] = useState(1);
  const [status, setStatus] = useState(1);
  const [user, setUser] = useState('ahmed');
  const { selected } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const isEdit = type === 'edit';

  const handleEditTodo = () => {
    dispatch(
      editTodo({
        ...selected,
        title,
        description,
        date: dateObj,
        priority,
        status,
        assignedUser: user,
      })
    );
    handleCancel();
  };
  useEffect(() => {
    if (isEdit) {
      setDescription(selected.description);
      setTitle(selected.title);
      setPriority(selected.priority);
      setStatus(selected.status);
      setUser(selected.assignedUser);
    }
  }, [selected]);

  const handleAddTodo = (e) => {
    // "27-11-2020"
    dispatch(
      addTodo({
        title,
        description,
        date: dateObj,
        priority,
        status,
        assignedUser: user,
      })
    );
    setTitle('');
    setDescription('');
    setDateObj(new Date());
    setUser('');
    handleCancel();
  };
  const onChangeDate = (date, dateString) => {
    setDateObj({ timestamp: date._d.getTime(), dateString });
  };
  return (
    <Modal
      title={
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          {isEdit ? 'Edit Todo' : 'Add Todo'}
        </Typography.Title>
      }
      centered
      visible={isModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      width={'calc(100% - 100px)'}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={isEdit ? handleEditTodo : handleAddTodo}
        >
          {isEdit ? 'Edit Todo' : 'Add Todo'}
        </Button>,
      ]}
    >
      <Form>
        <Input
          placeholder="Title"
          size="large"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          size="large"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DatePicker
          onChange={onChangeDate}
          format={'DD/MM/YYYY'}
          placeholder="Select date Ex: 20/01/2021"
        />

        <Select
          value={priority}
          style={{ width: 120 }}
          onChange={(value) => setPriority(value)}
        >
          <Option value={1}>Low</Option>
          <Option value={2}>Medium</Option>
          <Option value={3}>High</Option>
        </Select>
        <Select
          style={{ width: 120 }}
          onChange={(value) => setStatus(value)}
          value={status}
        >
          <Option value={1}>To-Do</Option>
          <Option value={2}>In Progress</Option>
          <Option value={3}>Done</Option>
        </Select>

        <Select
          placeholder="Select a person"
          style={{ width: 150 }}
          value={user}
          onChange={(value) => setUser(value)}
        >
          <Option value={'ahmed'}>Ahmed</Option>
          <Option value={'mohamed'}>Mohamed</Option>
          <Option value={'john'}>John</Option>
        </Select>
      </Form>
    </Modal>
  );
};

export default FormComponent;
