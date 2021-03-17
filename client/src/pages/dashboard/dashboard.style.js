import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  font-family: inherit;
  width: fit-content;
  padding: 10px;
  background-color: #fbc9a8;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;
  border: solid #000000 1px;
  margin: 15px;

  &:focus,
  &:active,
  &:hover {
    background-color: #ffffff;
    color: #fbc9a8;
  }
`;
