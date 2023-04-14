import styled from 'styled-components';

export const Container = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-white);
  border-radius: 100px;

  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;

  color: var(--color-white);
  background-color: transparent;

  font-weight: 500;
  font-size: 1.25rem;

  display: flex;
  align-items: center;

  transition: background-color 0.3s, border-color 0.3s;

  &::before {
    content: counter(quest-option, upper-alpha);

    --size: 2.5rem;

    font-size: 1.25rem;

    background-color: #ffffff38;
    width: var(--size);
    height: var(--size);

    border-radius: 50%;
    border: 1px solid #ffffff59;

    display: grid;
    place-items: center;

    margin: 0 1rem;

    transition: background-color 0.3s, border-color 0.3s;
  }

  &:hover,
  &.active {
    border-color: #f0ced9e5;
    background-color: #c7638333;

    &::before {
      border-color: #f0ced9e5;
      background-color: #c7638333;
    }
  }
`;
