import Post from '../post/post';
import { Wrapper, Title, Header } from './posts.style';

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Posts</Title>
      </Header>
      {!posts.length && <span>Not found posts, Create one!</span>}
      {posts.map(({ title, content }, index) => {
        return <Post key={index} title={title} content={content} />;
      })}
    </Wrapper>
  );
};

export default Posts;
