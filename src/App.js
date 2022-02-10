import React from 'react';
import { Layout } from 'antd';
import './App.css';
import ContentWrapper from './components/Content/ContentWrapper';
const { Header, Footer } = Layout;
const App = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <ContentWrapper />
      <Footer>Copyright © 2022 - Ibrahim Mohamed</Footer>
    </Layout>
  );
};

export default App;
