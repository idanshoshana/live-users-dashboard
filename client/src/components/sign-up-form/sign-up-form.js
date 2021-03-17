import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginSuccess, updateToken } from '../../store/auth/auth.actions';
import { useAuthContext } from '../../store/auth/auth.context';
import { signUpRequest, loginRequest } from '../../utils/authRequests';
import BasicForm from '../basic-form';

const SignUpForm = () => {
  const history = useHistory();
  const { dispatch } = useAuthContext();
  const [error, setError] = useState('');

  const signUp = async ({ username, password }) => {
    try {
      await signUpRequest({ username, password });
      const { accessToken } = await loginRequest({ username, password });
      dispatch(updateToken(accessToken));
      dispatch(loginSuccess(username));
      history.push('/dashboard');
    } catch (err) {
      setError('Error occurred, please try again');
    }
  };

  return (
    <>
      <BasicForm title={'Sign Up'} onSubmit={signUp} />
      {error && <span>{error}</span>}
    </>
  );
};

export default SignUpForm;
