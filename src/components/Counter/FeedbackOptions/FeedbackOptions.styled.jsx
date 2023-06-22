import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: 20px;
  margin: 10px;
  border: none;
  outline: 1px solid black;
  border-radius: 10px;
  translate: background-color 250ms liner;

  &:hover, &:active {
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.03rem;  
    background-color: cyan;
    border: 1px solit black;
  }

  &:active {
    background-color: tomato;
  }
`