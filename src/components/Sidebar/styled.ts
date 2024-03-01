import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme.gray800};
  border-radius: 8px;
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 4.5rem;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: calc(0px - 1.5rem - 6px);
  strong {
    color: ${(props) => props.theme.gray100};
    line-height: 1.6;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.gray400};
    line-height: 1.6;
  }
`;

export const ProfileNameVerified = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ProfileFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.gray600};
  padding: 1.5rem 2rem 2rem;
  margin-top: 1.5rem;
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem 0.875rem;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.gray500};
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme.gray500};
    text-decoration: none;
    background: transparent;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background: ${(props) => props.theme.green500};
      color: ${(props) => props.theme.white};
    }
  }
`;
