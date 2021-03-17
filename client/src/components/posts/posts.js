import Post from '../post/post';
import { Wrapper, Title, Button, Header } from './posts.style';

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Posts</Title>
        <Button>New</Button>
      </Header>
      {!posts.length && <span>Not found posts, Create one!</span>}
      {posts.map(({ title, content }) => {
        return <Post title={title} content={content} />;
      })}
    </Wrapper>
  );
};

export default Posts;
