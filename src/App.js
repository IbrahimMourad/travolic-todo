import React from 'react';
import { Layout, Typography } from 'antd';
import './App.css';
import ContentWrapper from './components/Content/ContentWrapper';
const { Header, Footer } = Layout;
const { Title } = Typography;
const App = () => {
  return (
    <Layout>
      <Header>
        <Title level={4}>Todo App</Title>
      </Header>
      <ContentWrapper />
      <Footer>
        <Title level={4}>Copyright © 2022 - Ibrahim Mohamed</Title>
      </Footer>
    </Layout>
  );
};

export default App;
