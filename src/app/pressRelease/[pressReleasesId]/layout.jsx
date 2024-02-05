import { Inter } from "next/font/google";
import configs from "../../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata({ params }) {
  const pressRelease = await fetch(
    `${baseURL}/pressReleases?id=${params.pressReleasesId}`
  ).then((res) => res.json());

  const title = pressRelease?.pressRelease?.components?.find(
    (e) => e.key === "header"
  )?.value;

  const seoDescription = pressRelease?.pressRelease?.components?.find(
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
