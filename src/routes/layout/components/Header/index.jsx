import React from 'react';
import { Layout, Icon, Avatar, Row, Col, Menu, Dropdown } from 'antd';
import { useConnect, router } from 'nuomi';
import style from './style.less';

const Header = () => {
  const [{ collapsed, user }, dispatch] = useConnect();

  const toggle = () => {
    dispatch({
      type: 'updateState',
      payload: { collapsed: !collapsed },
    });
  };

  const loginOut = () => {
    localStorage.setItem('isLogin', '');
    router.replace('/');
  };

  return (
    <Layout.Header style={{ background: '#fff', padding: '0 20px 0 0' }}>
      <Row justify="space-between" type="flex">
        <Col>
          <Icon
            className={style.trigger}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Col>
        <Col>
          <Dropdown
            overlay={(
              <Menu onClick={loginOut}>
                <Menu.Item>退出</Menu.Item>
              </Menu>
            )}
            placement="bottomCenter">
              <span>
                hello, {user.username}
                <Avatar icon="user" style={{ marginLeft: 8 }} />
              </span>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default Header;
