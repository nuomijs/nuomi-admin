import React from 'react';
import { Layout } from 'antd';
import Header from '../Header';
import { useConnect } from 'nuomi';

const Content = ({ children }) => {
  const [{ loadings }] = useConnect();

  return (
    <Layout>
      <Header />
      <Layout.Content style={{ padding: '0 24px 24px' }}>
      {loadings.$getUser === false && children}
      </Layout.Content>
    </Layout>
  );
}

export default Content;
