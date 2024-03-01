import {
  Author,
  AuthorInfo,
  PostArticle,
  PostContent,
  PostForm,
} from "./styled";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { useState } from "react";

export interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post bacana 🙀"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(
    event: React.FocusEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Campo está vazio!");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <PostArticle>
        <header>
          <Author>
            <Avatar
              hasBorder
              src="https://lh3.googleusercontent.com/a/ACg8ocLQ5ZM3nlo7DqGaT9wlboyXoi_J88a2SeEm63UwRQGu9Bw=s96-c"
            />
            <AuthorInfo>
              <strong>{author.name}</strong>
              <span> {author.role}</span>
            </AuthorInfo>
          </Author>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeNow}
          </time>
        </header>
        <PostContent>
          {content.map((line) => {
            if (line.type == "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type == "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </PostContent>

        <PostForm onSubmit={handleCreateNewComment}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name="comment"
            onChange={handleNewCommentChange}
            value={newCommentText}
            placeholder="Nossa, adorei amigo! Parabéns"
            required
            onInvalid={handleNewCommentInvalid}
          />
          <footer>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </footer>
        </PostForm>
      </PostArticle>
    </>
  );
}
