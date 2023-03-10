import styled from "styled-components";

export const CategoryStyled = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const OptionsStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.4rem;
    margin: 2px 0;
    font-weight: 400;
    display: flex;

    input {
      margin-right: 5px;
    }
  }
`;

type LabelProps = {
  isWinner: boolean;
  isLoser?: boolean;
};

export const LabelStyled = styled.label<LabelProps>`
  background-color: ${({ isWinner, isLoser }) =>
    isWinner ? "#c7e8ca" : isLoser ? "#FF8E9E" : "inherit"};
  width: 90%;
  padding: 0.3rem 1rem;
  border-radius: 8px;
`;
