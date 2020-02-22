import React from 'react';
import { Layout } from 'antd';
import Header from '../Header';

const Content = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}

export default Content;
