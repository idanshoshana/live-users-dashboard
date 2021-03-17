import BasicForm from '../basic-form';

const SignUpForm = () => {
  const signUp = (values) => {};

  return <BasicForm title={'Register'} onSubmit={signUp} />;
};

export default SignUpForm;
