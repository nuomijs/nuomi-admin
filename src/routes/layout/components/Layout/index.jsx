import React from 'react';
import propTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.less';

const Layout = ({ routes }) => {
  return (
    <AntdLayout styleName="layout">
      <Sidebar />
      <Content>
        {routes}
      </Content>
    </AntdLayout>
  );
};

Layout.propTypes = {
  routes: propTypes.array,
};

export default Layout;
