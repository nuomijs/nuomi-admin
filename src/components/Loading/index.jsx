import React from 'react';
import { Spin } from 'antd';
import './style.less';

const Loading = ({ text }) => {
  return (
    <div styleName="loading">
      <Spin tip={text} size="large" />
    </div>
  );
}

Loading.defaultProps = {
  text: '欢迎欢迎，热烈欢迎...',
};

export default Loading;
