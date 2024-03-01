import {
  Author,
  AuthorInfo,
  CommentList,
  PostArticle,
  PostContent,
  PostForm,
} from "./styled";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { useEffect, useState } from "react";
import { Comment } from "../Comment";
import { api } from "../../services/api";

export interface PostProps {
  id?: number;
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

interface CommentProps {
  comment: string;
  imgSrc: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [newCommentText, setNewCommentText] = useState("");

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

  function deleteComment(comment: string) {
    setComments((comments) => {
      return comments.filter((resource) => {
        return resource.comment !== comment;
      });
    });
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  useEffect(() => {
    api.get("/comments").then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <>
      <PostArticle>
        <header>
          <Author>
            <Avatar src={author.avatarUrl} />
            <AuthorInfo>
              <strong>{author.name}</strong>
              <span> {author.role}</span>
            </AuthorInfo>
          </Author>
          <span>{publishedDateRelativeNow}</span>
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

        <CommentList>
          {comments.map((item: CommentProps) => {
            return (
              <Comment
                key={item.comment}
                content={item.comment}
                onDeleteComment={deleteComment}
                src={item.imgSrc}
              />
            );
          })}
        </CommentList>
      </PostArticle>
    </>
  );
}
