
import { createServices } from 'nuomi-request';

export default createServices({
  login: 'POST /login',
  getUser: 'GET /getUser'
});
