import { useState, useEffect } from 'react';
import Posts from '../../components/posts';
import Header from '../../components/header';
import { Title, Wrapper, Button } from './dashboard.style';
import CreatePostModal from '../../components/modal/create-post-modal';
import { useAuthContext } from '../../store/auth/auth.context';
import { useDashboardContext } from '../../store/dashboard/dashboard.context';
import { fetchPostsRequest } from '../../utils/dashboardRequests';
import { fetchPostsSuccess } from '../../store/dashboard/dashboard.actions';

const Dashboard = () => {
  const {
    auth: { username, token },
  } = useAuthContext();
  const {
    dashboard: { posts },
    dispatch,
  } = useDashboardContext();
  const [createPostDialogOpened, setCreatePostDialogOpened] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      if (token) {
        const posts = await fetchPostsRequest(token);
        dispatch(fetchPostsSuccess(posts));
      }
    };
    fetchPosts();
  }, [token, dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <Title>{username}</Title>
        <Button onClick={() => setCreatePostDialogOpened(true)}>
          New Post
        </Button>
        <Posts posts={posts} />
      </Wrapper>

      {createPostDialogOpened && (
        <CreatePostModal onClose={() => setCreatePostDialogOpened(false)} />
      )}
    </>
  );
};

export default Dashboard;
