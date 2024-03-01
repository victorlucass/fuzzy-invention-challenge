import styled from "styled-components";

interface AvatarProps {
  hasBorder: boolean;
}

export const AvatarStyle = styled.img<AvatarProps>`
  width: ${(props) => (props.hasBorder ? "calc(4rem + 12px)" : "4rem")};
  height: ${(props) => (props.hasBorder ? "calc(4rem + 12px)" : "4rem")};
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme.gray800};
`;
