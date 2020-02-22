import { router } from 'nuomi';
import services from '../../../services';

export default {
  async $login() {
    const { username, password } = this.getState();
    await services.login({ username, password }, { delay: 1000 });
    localStorage.setItem('isLogin', '1');
    router.replace('/platform');
  }
};
