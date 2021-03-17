import { useHistory } from 'react-router-dom';
import { loginSuccess, updateToken } from '../../store/auth/auth.actions';
import { useAuthContext } from '../../store/auth/auth.context';
import { signUpRequest, loginRequest } from '../../utils/authRequests';
import BasicForm from '../basic-form';

const SignUpForm = () => {
  const history = useHistory();
  const { dispatch } = useAuthContext();

  const signUp = async ({ username, password }) => {
    await signUpRequest({ username, password });
    const { accessToken } = await loginRequest({ username, password });
    dispatch(updateToken(accessToken));
    dispatch(loginSuccess(username));
    history.push('/dashboard');
  };

  return <BasicForm title={'Sign Up'} onSubmit={signUp} />;
};

export default SignUpForm;
