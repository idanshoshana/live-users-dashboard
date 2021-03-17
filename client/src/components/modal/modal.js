import Portal from '../portal';
import { BackDrop, Wrapper, CancelButton } from './modal.style';

const Modal = ({ children, onClose }) => {
  return (
    <Portal>
      <BackDrop>
        <Wrapper>
          <CancelButton onClick={onClose}>X</CancelButton>
          {children}
        </Wrapper>
      </BackDrop>
    </Portal>
  );
};

export default Modal;
