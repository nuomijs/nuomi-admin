import login from './login';
import layout from './layout';

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
    children: '404',
  }],
}, {
  path: '*',
  children: '404',
}];
