import CreatePostForm from '../../create-post-form';
import Modal from '../modal';

const CreatePostModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <CreatePostForm />
    </Modal>
  );
};

export default CreatePostModal;
