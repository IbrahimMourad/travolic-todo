import React, { useEffect, useRef, useState } from 'react';
import { Typography } from 'antd';
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';
import FormComponent from '../FormComponent/FormComponent';
const { Title } = Typography;
const TodoItem = ({ todo, handleDeleteTodo, handleSelectTodo, idx }) => {
  const cardRef = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spans, setSpans] = useState(0);
  const helperPriority = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };
  const helperStatus = { 1: 'To-do', 2: 'In-Progress', 3: 'Done' };

  const showModalEdit = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  useEffect(() => {
    // get card height to define the span size
    const height = cardRef.current.clientHeight;
    const customSpans = Math.ceil(height / 5);
    setSpans(customSpans);
  }, []);

  return (
    <div className={`card-wrap `} style={{ gridRowEnd: `span ${spans}` }}>
      <div ref={cardRef} className={`card `}>
        <div className="task-title ">
          <Title level={4}>
            {idx + 1} | {todo.title}
          </Title>
          <div
            className={`badge ${helperPriority[todo.priority].toLowerCase()}`}
          >
            {helperPriority[todo.priority]}{' '}
          </div>
        </div>
        <div className="task-description">{todo.description}</div>
        <div className="task-status">{helperStatus[todo.status]}</div>
        <div className="task-date">
          <p>
            <CalendarOutlined /> Start Date:{' '}
            {todo.date.from.dateString
              ? todo.date.from.dateString
              : 'No date specified'}
          </p>
          <p>
            <CalendarOutlined /> End Date:{' '}
            {todo.date.to.dateString
              ? todo.date.to.dateString
              : 'No date specified'}
          </p>
        </div>
        <div className="task-user text-capitalize">
          <UserOutlined /> {todo.assignedUser}
        </div>
        <div className="task-actions ">
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
      </div>
      {/* <Card ref={cardRef} title={`${idx + 1} | ${todo.title}`}>
      
      </Card> */}
    </div>
  );
};

export default TodoItem;
