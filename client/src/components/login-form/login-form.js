import { loginSuccess, updateToken } from '../../store/auth/auth.actions';
import { useAuthContext } from '../../store/auth/auth.context';
import { loginRequest } from '../../utils/authRequests';
import BasicForm from '../basic-form';

const LoginForm = () => {
  const { dispatch } = useAuthContext();

  const login = async ({ username, password }) => {
    const { accessToken } = await loginRequest({ username, password });
    dispatch(updateToken(accessToken));
    dispatch(loginSuccess(username));
  };

  return <BasicForm title={'Login'} onSubmit={login} />;
};

export default LoginForm;
