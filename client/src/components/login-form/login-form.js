import BasicForm from '../basic-form';

const LoginForm = () => {
  const logIn = (values) => {};

  return <BasicForm title={'Login'} onSubmit={logIn} />;
};

export default LoginForm;
