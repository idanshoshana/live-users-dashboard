import SignUpForm from '../../forms/sign-up-form';
import Modal from '../modal';

const SignUpModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
