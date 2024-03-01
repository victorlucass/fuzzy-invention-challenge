import { useEffect, useState } from "react";
import { Post, PostProps } from "../../components/Post";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { PostContainer } from "./styled";

export function Feed() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <PostContainer>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          );
        })}
      </PostContainer>
    </>
  );
}
