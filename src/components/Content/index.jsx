import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'nuomi';

const Content = ({ children, crumbs }) => {
  const crumbsArray = [{ path: '/platform', title: '首页' }].concat(crumbs);
  const crumbsMaxIndex = crumbsArray.length - 1;
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {crumbsArray.map((value, key) => (
          <Breadcrumb.Item key={key}>
            {crumbsMaxIndex === key ? value.title : <Link to={value.path}>{value.title}</Link>}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Layout.Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}>
        {children}
      </Layout.Content>
    </Layout>
  );
};

Content.defaultProps = {
  crumbs: [],
};

export default Content;
