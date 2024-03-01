import styled from "styled-components";

export const PostArticle = styled.article`
  background: ${(props) => props.theme.gray800};
  border-radius: 8px;
  padding: 2.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.875rem;
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    color: ${(props) => props.theme.gray100};
    line-height: 1.6;
  }
  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme.gray400};
  }
`;

export const PostContent = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.gray600};
  p:last-child {
    margin-bottom: 1.5rem;
  }
  p + p {
    margin-top: 1.5rem;
  }
  p a {
    color: ${(props) => props.theme.green300};
    font-weight: 700;
    font-family: "Roboto";
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1rem;

  * > strong {
    line-height: 1.6;
    color: ${(props) => props.theme.gray100};
  }

  textarea {
    width: 100%;
    background: ${(props) => props.theme.gray900};
    border: 0;
    resize: none;
    /* resize não permite que o usuario redimencione o textarea */
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.gray100};
    line-height: 1.4;
  }

  button[type="submit"] {
    padding: 1rem 1.5rem 0.875rem;
    border-radius: 8px;
    background: ${(props) => props.theme.green500};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    cursor: pointer;
    align-self: flex-start;
    transition: color 0.2s, background-color 0.2s;
  }

  button[type="submit"]:not(:disabled):hover {
    background: ${(props) => props.theme.green300};
  }

  button[type="submit"]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  footer {
    margin: 0;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;
