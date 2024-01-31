import { Inter } from "next/font/google";
import configs from "../../utils/configs";

const inter = Inter({ subsets: ["latin"] });
const baseURL = configs.baseURL;

export async function generateMetadata() {
  const video = await fetch(`${baseURL}/videos`).then((res) => res.json());
  //   console.log({ video });
  const seo = video?.video;
  console.log(seo);
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
