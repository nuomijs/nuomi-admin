import { store, nuomi } from 'nuomi';
import { axios, createMock } from 'nuomi-request';
import { message } from 'antd';
import immutable from 'redux-immutable-state-invariant';
import * as mocks from '../mocks';
import effects from './effects';

if (process.env.NODE_ENV !== 'production') {
  store.applyMiddleware(immutable());
  createMock(mocks);
}

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

nuomi.config({
  effects,
});

message.config({
  maxCount: 3,
  duration: 2,
});
