//Importing getAPiDocs from lib
import { getApiDocs } from "../../../lib/swagger";
import dynamic from "next/dynamic";

//Dynamically importing ReactSwagger component to code-spliting
const ReactSwagger = dynamic(() => import("./react-swagger"), {
  ssr: false,
});

export default async function IndexPage() {
  const spec = await getApiDocs(); //Fetching API
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
