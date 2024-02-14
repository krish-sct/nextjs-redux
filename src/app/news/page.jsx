import React, { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: "News",
};

const News = async () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default News;
