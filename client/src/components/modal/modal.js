import Portal from '../portal';
import { BackDrop, Wrapper } from './modal.style';

const Modal = ({ children }) => {
  return (
    <Portal>
      <BackDrop>
        <Wrapper>{children}</Wrapper>
      </BackDrop>
    </Portal>
  );
};

export default Modal;
