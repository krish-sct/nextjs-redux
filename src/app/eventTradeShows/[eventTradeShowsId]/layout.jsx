import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const eventTradeShow = await fetch(
    `${baseURL}/eventTradeShows?id=${params.eventTradeShowsId}`
  ).then((res) => res.json());

  const title = eventTradeShow?.eventTradeShow?.components?.find(
    (e) => e.key === "header"
  )?.value;

  const seoDescription = eventTradeShow?.eventTradeShow?.components?.find(
    (e) => e.key === "seo"
  )?.value;

  return {
    title: `${title}`,
    description: `${seoDescription}`,
  };
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
