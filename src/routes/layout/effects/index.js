import services from '../../../services';

export default {
  async $getUser() {
    const { data: { data: user } } = await services.getUser({}, { delay: 1000 });
    this.updateState({ user });
  },
  selectMenu() {
    const { location: { pathname } } = this.getNuomiProps();
    this.updateState({ selectedKeys: [pathname], });
  },
};
