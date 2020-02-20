export default {
  updateState(payload) {
    this.dispatch({
      type: '_updateState',
      payload,
    });
  },
};
