import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Form,
  InputContainer,
  Input,
  Title,
  Button,
} from './basic-form.style';

const BasicForm = ({ title, onSubmit }) => {
  const { handleSubmit, register, errors } = useForm({
    criteriaMode: 'firstError',
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit((values) => onSubmit(values))}>
        <InputContainer>
          <Input
            name="username"
            type="text"
            placeholder="Choose a user name"
            ref={register({
              required: 'Please fill out this field',
              pattern: {
                value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,29}$/i,
                message: 'Invalid username',
              },
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </InputContainer>
        <InputContainer>
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            ref={register({
              required: 'Please fill out this field',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i,
                message: 'Very weak password',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </InputContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default BasicForm;
