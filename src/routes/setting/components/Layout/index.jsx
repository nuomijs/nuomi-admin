import React from 'react';
import { Content } from '../../../../components';
import { useNuomi } from 'nuomi';

const Layout = () => {
  const { nuomiProps: { location: { pathname } } } = useNuomi();
  return (
    <Content crumbs={[{ path: pathname, title: '设置' }]}>设置</Content>
  );
};

export default Layout;
