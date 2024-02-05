import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const id = params.articleId;

  const article = await fetch(
    `${baseURL}/articles?id=${params.articleId}`
  ).then((res) => res.json());

  const title = article?.article?.components?.find(
    (e) => e.key === "header"
  )?.value;

  const seo = article?.article?.components?.find((e) => e.key === "seo")?.value;

  return {
    title: `${title}`,
    description: `${seo}`,
  };
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
