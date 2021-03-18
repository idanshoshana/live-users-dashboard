import { createContext, useReducer, useContext } from 'react';
import { authReducer } from './auth.reducer';

export const AuthContext = createContext({
  auth: {
    username: null,
    token: null,
  },
  dispatch: () => {},
});

const initialState = {
  username: null,
  token: null,
};

export const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  const authData = { auth, dispatch };

  return <AuthContext.Provider value={authData} {...props} />;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
