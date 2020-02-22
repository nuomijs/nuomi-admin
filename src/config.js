import { store, nuomi } from 'nuomi';
import { axios, createMock } from 'nuomi-request';
import { message } from 'antd';
import immutable from 'redux-immutable-state-invariant';
import * as mocks from '../mocks';
import effects from './effects';

// 开发环境
if (process.env.NODE_ENV !== 'production') {
  // redux数据不可变中间件
  store.applyMiddleware(immutable());

  // 创建模拟数据
  createMock(mocks);
}

// axios配置
axios.interceptors.response.use((response) => {
  const { data, config } = response;
  if (data.status !== 200) {
    if (config.message !== null) {
      message.error(config.message || data.message);
    }
    return Promise.reject(response);
  }
  return response;
});

// nuomi配置
nuomi.config({
  effects,
});

// 其他配置
message.config({
  maxCount: 3,
  duration: 2,
});
