import { Suspense } from "react";
import List from "./List";

export const metadata = {
  title: "Testimonials",
};

const Testimonials = async () => {
  return (
    <div>
      <Suspense fallback={<div className="spinner"></div>}>
        <List />
      </Suspense>
    </div>
  );
};

export default Testimonials;
