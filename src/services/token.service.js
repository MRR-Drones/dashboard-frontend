const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.jwtToken;
};

const updateLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.jwtToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => JSON.parse(localStorage.getItem('user'));

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem('user');
};

const TokenService = {
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
