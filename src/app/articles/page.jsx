import React from "react";
import List from "./List";

export const metadata = {
  title: {
    absolute: "Articles | Econ Systems",
  },
  type: "article",
  description: "Articles build experience for any stack",
  keywords: ["Article", "Nvidia", "camera"],
  authors: [{ name: "Deepthi" }, { name: "Bala", url: "" }],
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://localhost:3000"),
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
