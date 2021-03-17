import { useState } from 'react';
import Header from '../../components/header';
import LoginModal from '../../components/modal/login-modal';
import SignUpModal from '../../components/modal/sign-up-modal';
import { Wrapper, Title, Button, ButtonsWrapper } from './login-page.style';

const LoginPage = () => {
  const [signUpDialogOpened, setSignUpDialogOpened] = useState(false);
  const [loginDialogOpened, setLoginDialogOpened] = useState(false);

  return (
    <>
      <Wrapper>
        <Header />
        <Title>Please log in to see your dashboard!</Title>
        <ButtonsWrapper>
          <Button onClick={() => setLoginDialogOpened(true)}>Log In</Button>
          <Button onClick={() => setSignUpDialogOpened(true)}>Sign Up</Button>
        </ButtonsWrapper>
      </Wrapper>

      {signUpDialogOpened && (
        <SignUpModal onClose={() => setSignUpDialogOpened(false)} />
      )}
      {loginDialogOpened && (
        <LoginModal onClose={() => setLoginDialogOpened(false)} />
      )}
    </>
  );
};

export default LoginPage;
