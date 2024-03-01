import styled from "styled-components";

export const AvatarStyle = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme.gray800};
`;
