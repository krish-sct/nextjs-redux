import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const newsLetter = await fetch(
    `${baseURL}/newsLetters?id=${params.newsLetterId}`
  ).then((res) => res.json());

  const title = newsLetter?.newsLetter?.components?.find(
    (e) => e.key === "header"
  )?.value;
  console.log(title);

  const seo = newsLetter?.newsLetter?.components?.find(
    (e) => e.key === "seo"
  )?.value;
  console.log(seo);

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
