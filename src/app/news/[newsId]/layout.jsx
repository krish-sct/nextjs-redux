import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const news = await fetch(`${baseURL}/news?id=${params.newsId}`).then((res) =>
    res.json()
  );

  const title = news?.newses?.components?.find(
    (e) => e.key === "header"
  )?.value;

  const seo = news?.newses?.components?.find((e) => e.key === "seo")?.value;

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
