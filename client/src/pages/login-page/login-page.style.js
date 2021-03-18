import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;

  & > button {
    margin-top: 15px;
  }
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
