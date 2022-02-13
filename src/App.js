import React from 'react';
import { Layout, Typography } from 'antd';
import './App.css';
import ContentWrapper from './components/Content/ContentWrapper';
import Footer from './components/Footer/Footer';
const { Header } = Layout;
const { Title } = Typography;
const App = () => {
  return (
    <Layout>
      <Header>
        <Title level={4}>Todo App</Title>
      </Header>
      <ContentWrapper />
      <Footer />
    </Layout>
  );
};

export default App;
