import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  background-color: #ffffff;
  position: relative;
  margin: auto;
  min-width: 300px;
  min-height: 100px;
  max-width: 55%;
  margin-top: 100px;
  border-radius: 3px;
  text-align: center;
  padding: 20px;
`;

export const CancelButton = styled.button`
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 50%;
  text-align: center;
  background-color: #fbc9a8;
  width: 30px;
  height: 30px;
  border: 0;
  outline: none;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    background-color: #ffffff;
    color: #fbc9a8;
  }
`;
