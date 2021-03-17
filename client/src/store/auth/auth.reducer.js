import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_TOKEN,
  REMOVE_TOKEN,
} from './auth.actions';

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        username: null,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
