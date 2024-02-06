import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: " Contact us",
    template: "%s |  contact us e-con systems",
  },
  description: "Generated for enquires and contact purpose",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
