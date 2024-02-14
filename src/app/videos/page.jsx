import { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: "Videos",
};

const Videos = () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default Videos;
