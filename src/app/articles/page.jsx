import React from "react";
import List from "./List";

export const metadata = {
  title: {
    default: "Articles",
  },
};

const Article = async () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default Article;
