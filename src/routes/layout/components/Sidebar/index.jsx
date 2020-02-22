import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useConnect, router, useNuomi } from 'nuomi';
import Logo from './Logo';

const Sidebar = () => {
  const [{ collapsed, selectedKeys }] = useConnect();
  const { nuomiProps: { path } } = useNuomi();

  const onSelect = ({ key }) => {
    router.location(key);
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu selectedKeys={selectedKeys} theme="dark" onSelect={onSelect}>
        <Menu.Item key={router.mergePath(path, '/')}>
          <Icon type="home" />
          <span>首页</span>
        </Menu.Item>
        <Menu.Item key={router.mergePath(path, '/list')}>
          <Icon type="appstore" />
          <span>列表</span>
        </Menu.Item>
        <Menu.Item key={router.mergePath(path, '/setting')}>
          <Icon type="setting" />
          <span>设置</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
