import { useState } from 'react';
import Posts from '../../components/posts';
import Header from '../../components/header';
import { Title, Wrapper, Button } from './dashboard.style';
import CreatePostModal from '../../components/modal/create-post-modal';

const Dashboard = () => {
  const [createPostDialogOpened, setCreatePostDialogOpened] = useState(false);

  return (
    <>
      <Header />
      <Wrapper>
        <Title>Welcome Idan!</Title>
        <Button onClick={() => setCreatePostDialogOpened(true)}>
          New Post
        </Button>
        <Posts posts={[{ title: 'hello', content: 'hhh' }]} />
      </Wrapper>

      {createPostDialogOpened && (
        <CreatePostModal onClose={() => setCreatePostDialogOpened(false)} />
      )}
    </>
  );
};

export default Dashboard;
