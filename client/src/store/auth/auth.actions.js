export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const loginSuccess = (username) => {
  return {
    type: LOGIN_SUCCESS,
    username,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const updateToken = (token) => {
  return {
    type: UPDATE_TOKEN,
    token: token,
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};
