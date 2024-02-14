import { Inter } from "next/font/google";
import configs from "../../../utils/configs";
import { Suspense } from "react";

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

  const seoDescription = article?.article?.components?.find(
    (e) => e.key === "seo"
  )?.value;

  return {
    title: `${title}`,
    description: `${seoDescription}`,
    formatDetection: {
      email: false,
      telephone: false,
    },
    metadataBase: new URL("http://192.168.1.220:3000/"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "ja-jp": "/ja-jp",
        "en-gb": "/en-gb",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <Suspense fallback={<div className="spinner">Loading......</div>}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
