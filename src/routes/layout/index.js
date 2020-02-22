import React from 'react';
import { Redirect } from 'nuomi';
import Layout from './components/Layout';
import effects from './effects';

export default {
  id: 'global',
  reload: false,
  state: {
    user: {},
    selectedKeys: [],
    collapsed: false,
  },
  effects,
  render() {
    return localStorage.getItem('isLogin') === '1' ?
      <Layout routes={this.children} /> : <Redirect to="/" />;
  },
  onChange: {
    selectMenu() {
      this.store.dispatch({
        type: 'selectMenu',
      });
    }
  },
  onInit() {
    this.store.dispatch({
      type: '$getUser',
    });
  },
};
