import React from 'react';
import { Layout } from 'antd';

import TodoList from '../TodoList/TodoList';

const { Content } = Layout;

const ContentWrapper = () => {
  return (
    <Content className="bg-dark-grey">
      <div className="container ">
        <TodoList />
      </div>
    </Content>
  );
};

export default ContentWrapper;
