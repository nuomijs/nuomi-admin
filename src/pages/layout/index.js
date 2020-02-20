import React from 'react';
import Layout from './components/Layout';
import effects from './effects';

export default {
  state: {},
  effects,
  render() {
    return <Layout routes={this.children} />;
  },
  onInit() {},
};
