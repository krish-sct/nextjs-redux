import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const podcast = await fetch(
    `${baseURL}/podcasts?id=${params.podcastsId}`
  ).then((res) => res.json());

  const title = podcast?.podcast?.components?.find(
    (e) => e.key === "header"
  )?.value;

  const seo = podcast?.podcast?.components?.find((e) => e.key === "seo")?.value;

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
