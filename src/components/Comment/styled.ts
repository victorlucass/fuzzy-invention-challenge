import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  flex: 1;
  p {
    margin-top: 1rem;
  }
`;

export const CommentContent = styled.div`
  background: ${(props) => props.theme.gray700};
  border-radius: 8px;
  padding: 1rem;

  header button {
    align-self: flex-start;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.gray400};
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;

    &:hover {
      color: ${(props) => props.theme.red500};
    }
  }
`;

export const AuthorAndTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  strong {
    color: ${(props) => props.theme.gray100};
    span {
      color: ${(props) => props.theme.gray400};
    }
  }
  time {
    font-size: 0.75rem;
    color: ${(props) => props.theme.gray400};
  }
`;
