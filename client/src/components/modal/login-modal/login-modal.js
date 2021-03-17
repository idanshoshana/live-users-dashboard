import LoginForm from '../../login-form';
import Modal from '../modal';

const LoginModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
