import React from 'react';
import propTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import { useConnect } from 'nuomi';
import { Loading } from '../../../../components';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './style.less';

const Layout = ({ routes }) => {
  const [{ loadings }] = useConnect();

  return (
    <>
      {loadings.$getUser && <Loading />}
      <AntdLayout styleName="layout">
        <Sidebar />
        <Content>
          {routes}
        </Content>
      </AntdLayout>
    </>
  );
};

Layout.propTypes = {
  routes: propTypes.array,
};

export default Layout;
