import { useState } from "react";
import { Avatar } from "../Avatar";
import {
  AuthorAndTime,
  CommentBox,
  CommentContainer,
  CommentContent,
} from "./styled";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

interface CommentProps {
  content: string;
  src: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, src, onDeleteComment }: CommentProps) {
  const [likeAcount, setLikeAcount] = useState(0);

  // Functions

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeAcount((valorMaisAtual) => {
      return valorMaisAtual + 1;
    });
  }

  // ------------------------------------

  return (
    <CommentContainer>
      <Avatar hasBorder={false} src={src} />

      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <strong>
                Victor Lucas <span>(você)</span>
              </strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </AuthorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </CommentContent>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            <strong>Aplaudir {likeAcount}</strong>
          </button>
        </footer>
      </CommentBox>
    </CommentContainer>
  );
}
