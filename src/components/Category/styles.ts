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
    margin: 5px 0;
    font-weight: 400;
    display: flex;

    input {
      margin-right: 5px;
    }
  }
`;
