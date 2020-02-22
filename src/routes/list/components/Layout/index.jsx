import React from 'react';
import { Content } from '../../../../components';
import { useNuomi } from 'nuomi';

const Layout = () => {
  const { nuomiProps: { location: { pathname } } } = useNuomi();
  return (
    <Content crumbs={[{ path: pathname, title: '列表' }]}>列表</Content>
  );
};

export default Layout;
