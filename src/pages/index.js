import login from './login';
import layout from './layout';
import _404 from './404';

export default [{
  path: '/',
  ...login,
}, {
  path: '/platform/*',
  route: false,
  ...layout,
  children: [{
    path: '/',
    async: () => import('./home'),
  }, {
    path: '*',
    ..._404,
  }],
}, {
  path: '*',
  ..._404,
}];
