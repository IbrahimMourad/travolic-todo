import React, { useState } from 'react';
import { Layout } from 'antd';

import AddForm from '../AddForm/AddForm';
import TodoList from '../TodoList/TodoList';

const { Content } = Layout;

const ContentWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  return (
    <>
      <Content className="bg-dark-grey">
        <div className="container">
          <TodoList showAddModal={showModal} />
        </div>
      </Content>
      <AddForm isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>
  );
};

export default ContentWrapper;
