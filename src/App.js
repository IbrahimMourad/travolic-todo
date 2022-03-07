import React, { useState } from 'react';
import { Layout, Typography, Button } from 'antd';
import './App.css';
import ContentWrapper from './components/Content/ContentWrapper';
import Footer from './components/Footer/Footer';
import FormComponent from './components/FormComponent/FormComponent';
import { PlusOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;
const App = () => {
  // state for add modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  return (
    <Layout>
      <Header className="navbar">
        <Title level={4}>Todo App</Title>
        <Button className="add-icon" onClick={showModal}>
          <PlusOutlined style={{ fontSize: '2rem' }} />
        </Button>
      </Header>
      <FormComponent
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
      <ContentWrapper />
      <Footer />
    </Layout>
  );
};

export default App;
