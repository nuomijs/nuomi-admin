import React from 'react';
import { Redirect } from 'nuomi';
import Layout from './components/Layout';
import effects from './effects';

export default {
  state: {},
  effects,
  render() {
    return localStorage.getItem('isLogin') === '1' ?
      <Layout routes={this.children} /> : <Redirect to="/" />;
  },
  onInit() {},
};
