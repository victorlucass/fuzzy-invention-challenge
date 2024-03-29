import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gray800};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;
