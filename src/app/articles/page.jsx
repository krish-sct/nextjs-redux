import React from "react";
import List from "./List";

export const metadata = {
  title: {
    default: "Articles",
  },
  type: "article",
  description: "Articles build experience for any stack",
  authors: [{ name: "Deepthi" }, { name: "Bala", url: "" }],
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://192.168.1.220:3000/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ja-jp": "/ja-jp",
      "en-gb": "/en-gb",
    },
  },
};
const Article = async () => {
  return <List />;
};

export default Article;
