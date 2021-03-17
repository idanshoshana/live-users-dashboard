import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid #edeff1 1px;
  width: 80%;
  border-radius: 3px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  font-family: inherit;
  width: fit-content;
  padding: 10px;
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
