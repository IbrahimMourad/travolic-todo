import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import AddForm from '../AddForm/AddForm';
import './styles.css';
import TodoList from '../TodoList/TodoList';

const { Content } = Layout;

const ContentWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  return (
    <>
      <Content className="bg-green">
        <div className="container">
          <TodoList />
        </div>
      </Content>
      <AddForm isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>
  );
};

export default ContentWrapper;
