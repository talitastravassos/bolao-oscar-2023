import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 2rem 0;

  form > div {
    margin: 5rem;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    row-gap: 3rem;
    width: 80%;

    @media (max-width: 899px) {
      grid-template-columns: 3fr;
    }
  }
`;

export const ButtonStyled = styled.button`
  margin: 2rem auto;
  display: block;
  width: 15rem;
  height: 3rem;

  background-color: #191825;
  border-radius: 6px;
  border: 1px solid #2e3840;
  cursor: pointer;
  color: #f7f1e5;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;

  &:hover {
    background-color: #434242;
  }

  &:active {
    background-color: #222222;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #191825;
    opacity: 0.8;
  }
`;
