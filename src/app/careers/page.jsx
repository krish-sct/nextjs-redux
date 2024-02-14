import React, { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: {
    absolute: "Careers",
  },
};
const Careers = async () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default Careers;
