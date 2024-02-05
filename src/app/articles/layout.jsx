import { Inter } from "next/font/google";
import Breadcrumb from "../components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        {/* <Breadcrumb /> */}
        {children}
      </div>
    </div>
  );
}
