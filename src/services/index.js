
import { createServices } from 'nuomi-request';
import mock from './mock';

export default createServices({
  login: 'POST /login',
}, process.env.NODE_ENV !== '' ? mock : null);
