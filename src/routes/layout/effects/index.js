import services from '../../../services';

export default {
  async $getUser() {
    const { data: { data: user } } = await services.getUser();
    this.dispatch({
      type: 'updateState',
      payload: {
        user,
      },
    });
  },
  selectMenu() {
    const { location: { pathname } } = this.getNuomiProps();
    this.dispatch({
      type: 'updateState',
      payload: {
        selectedKeys: [pathname],
      },
    });
  },
};
