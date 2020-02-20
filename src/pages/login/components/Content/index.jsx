import React from 'react';
import { useConnect } from 'nuomi';
import LoginForm from './LoginForm';
import './style.less';

const Content = () => {
  const [{ username, password }, dispatch] = useConnect();

  const handleFormChange = changedFields => {
    const payload = {};

    Object.keys(changedFields).forEach((field) => {
      payload[field] = changedFields[field].value;
    });

    dispatch({
      type: 'updateState',
      payload,
    });
  };

  return (
    <div styleName="content">
      <LoginForm username={username} password={password} onChange={handleFormChange} />
      <p>用户名：admin 密码：admin</p>
    </div>
  );
};

export default Content;
