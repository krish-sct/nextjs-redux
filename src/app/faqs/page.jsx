import React, { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: {
    absolute: "Frequently Asked Questions | Econ Systems",
  },
};

const Faq = async () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default Faq;
