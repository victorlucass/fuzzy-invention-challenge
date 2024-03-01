import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/posts", () => {
      return [
        {
          id: 1,
          author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "Front-End Developer",
          },
          content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
              type: "paragraph",
              content:
                "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "👉 jane.design/doctorcare" },
          ],
          publishedAt: new Date(),
        },
        {
          id: 2,
          author: {
            avatarUrl: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            role: "Educator @Rocketseat",
          },
          content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
              type: "paragraph",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            { type: "link", content: "https://www.lipsum.com" },
          ],
          publishedAt: new Date(),
        },
      ];
    });
    this.get("comments", () => {
      return [
        {
          imgSrc: "https://github.com/diego3g.png",
          comment: "Post bacana 🙀",
        },
        {
          imgSrc: "https://github.com/diego3g.png",
          comment: "Muito massa 🙀",
        },
        {
          imgSrc: "https://github.com/maykbrito.png",
          comment: "Muito bom",
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
