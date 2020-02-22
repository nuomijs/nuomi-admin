import React from 'react';
import { Redirect } from 'nuomi';
import Layout from './components/Layout';
import effects from './effects';

export default {
  state: {
    username: '',
    password: '',
  },
  effects,
  render() {
    return localStorage.getItem('isLogin') === "1" ?
      <Redirect to="/platform" /> : <Layout />;
  },
  onInit() {},
};
