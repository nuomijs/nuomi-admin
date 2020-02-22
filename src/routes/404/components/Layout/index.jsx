import React from 'react';
import { Result, Button } from 'antd';
import { useNuomi, router } from 'nuomi';

const Layout = () => {
  const { nuomiProps: { location } } = useNuomi();

  const backHome = () => {
    router.replace('/platform');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle={`对不起，页面”${location.url}“不存在`}
      extra={<Button type="primary" onClick={backHome}>返回首页</Button>}
    />
  );
};

export default Layout;
