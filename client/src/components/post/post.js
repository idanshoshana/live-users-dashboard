import { Wrapper, Title, Content } from './post.style';

const Post = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Post;
