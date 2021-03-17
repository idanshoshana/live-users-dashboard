import { useState } from 'react';
import { loginSuccess, updateToken } from '../../store/auth/auth.actions';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../store/auth/auth.context';
import { loginRequest } from '../../utils/authRequests';
import BasicForm from '../basic-form';

const LoginForm = () => {
  const history = useHistory();
  const { dispatch } = useAuthContext();
  const [error, setError] = useState('');

  const login = async ({ username, password }) => {
    try {
      const { accessToken } = await loginRequest({ username, password });
      dispatch(updateToken(accessToken));
      dispatch(loginSuccess(username));
      history.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <BasicForm title={'Login'} onSubmit={login} />
      {error && <span>{error}</span>}
    </>
  );
};

export default LoginForm;
