import login from './login';
import layout from './layout';
import _404 from './404';

export default [{
  path: '/',
  ...login,
}, {
  path: '/platform',
  ...layout,
  children: [{
    path: '/',
    async: () => import('./home'),
  }, {
    path: '/list',
    async: () => import('./list'),
  }, {
    path: '/setting',
    async: () => import('./setting'),
  }, {
    path: '*',
    ..._404,
  }],
}, {
  path: '*',
  ..._404,
}];
