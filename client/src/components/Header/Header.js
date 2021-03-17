import { Button } from '../../pages/dashboard/dashboard.style';
import { logoutSuccess, removeToken } from '../../store/auth/auth.actions';
import { useAuthContext } from '../../store/auth/auth.context';
import { Title, Wrapper } from './header.style';

const Header = () => {
  const {
    auth: { username, token },
    dispatch,
  } = useAuthContext();

  const logout = async () => {
    if (username && token) {
      dispatch(removeToken());
      dispatch(logoutSuccess());
    }
  };

  return (
    <Wrapper>
      <Title>Live Users Dashboard</Title>
      {username && token && <Button onClick={logout}>Log out</Button>}
    </Wrapper>
  );
};

export default Header;
