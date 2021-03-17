import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../store/auth/auth.context';
import { addPost } from '../../store/dashboard/dashboard.actions';
import { useDashboardContext } from '../../store/dashboard/dashboard.context';
import { createPostRequest } from '../../utils/dashboardRequests';
import {
  Wrapper,
  Form,
  ElementContainer,
  Input,
  Title,
  Button,
  TextArea,
} from './create-post-form.style';

const CreatePostForm = ({ onFinish }) => {
  const {
    auth: { token },
  } = useAuthContext();
  const { dispatch } = useDashboardContext();

  const { handleSubmit, register, errors } = useForm({
    criteriaMode: 'firstError',
  });

  const onSubmit = async ({ title, content }) => {
    if (token) {
      const post = await createPostRequest(token, { title, content });
      dispatch(addPost(post));
      onFinish();
    }
  };

  return (
    <Wrapper>
      <Title>Create a new post</Title>
      <Form onSubmit={handleSubmit((values) => onSubmit(values))}>
        <ElementContainer>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            ref={register({
              required: 'Please fill out this field',
            })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </ElementContainer>
        <ElementContainer>
          <TextArea
            name="content"
            type="text"
            placeholder="Content"
            ref={register({
              required: 'Please fill out this field',
            })}
          />
          {errors.content && <span>{errors.content.message}</span>}
        </ElementContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePostForm;
