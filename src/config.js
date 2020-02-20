import { store, nuomi } from 'nuomi';
import { axios, createMock } from 'nuomi-request';
import immutable from 'redux-immutable-state-invariant';
import * as mocks from '../mocks';
import effects from './effects';

if (process.env.NODE_ENV !== 'production') {
  store.applyMiddleware(immutable());
  createMock(mocks);
}

axios.interceptors.response.use((response) => {
  const { status } = response.data;
  if (status !== 200) {
    return Promise.reject(response);
  }
  return response;
});

nuomi.config({
  effects,
});
