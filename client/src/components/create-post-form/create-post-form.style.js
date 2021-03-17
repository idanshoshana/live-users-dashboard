import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  min-width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-top: 20px;
  }
`;

export const ElementContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  font-family: inherit;
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid #d3d5d8;
  border-radius: 3px;
  padding-left: 8px;
  transition: 0.2s;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  height: 300px;
  outline: none;
  border: 1px solid #d3d5d8;
  border-radius: 3px;
  padding-left: 8px;
  transition: 0.2s;
  background: transparent;
  padding: 5px;
  margin: 0;
  width: 100%;
  box-shadow: none;
  resize: none;
`;

export const Button = styled.button`
  font-family: inherit;
  height: 40px;
  width: 200px;
  padding: 1px;
  background-color: #fbc9a8;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;
  border: solid #000000 1px;

  &:focus,
  &:active,
  &:hover {
    background-color: #ffffff;
    color: #fbc9a8;
  }
`;
