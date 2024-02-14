import React, { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: {
    default: "PressRelease",
  },
};

const PressRelease = async () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default PressRelease;
