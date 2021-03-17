import { loginSuccess, updateToken } from '../../store/auth/auth.actions';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../store/auth/auth.context';
import { loginRequest } from '../../utils/authRequests';
import BasicForm from '../basic-form';

const LoginForm = () => {
  const history = useHistory();
  const { dispatch } = useAuthContext();

  const login = async ({ username, password }) => {
    const { accessToken } = await loginRequest({ username, password });
    dispatch(updateToken(accessToken));
    dispatch(loginSuccess(username));
    history.push('/dashboard');
  };

  return <BasicForm title={'Login'} onSubmit={login} />;
};

export default LoginForm;
