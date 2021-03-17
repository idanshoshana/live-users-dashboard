import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Form,
  ElementContainer,
  Input,
  Title,
  Button,
  TextArea,
} from './create-post-form.style';

const CreatePostForm = () => {
  const { handleSubmit, register, errors } = useForm({
    criteriaMode: 'firstError',
  });

  const onSubmit = (values) => {};

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
