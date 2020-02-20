export const login =  ({ username, password }) => {
  if (username !== 'admin' || password !== 'admin') {
    return {
      status: 300,
      message: '账号或者密码错误',
    };
  }
  return {
    status: 200,
  }
};
