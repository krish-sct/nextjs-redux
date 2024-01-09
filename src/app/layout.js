import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/FetchNavbar";
import { Providers } from "../redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Econ Systems",
    //default: "Econ Systems",
  },
  description: "Econ Systems build experience for any stack",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            <div className="container">
              <Navbar />
              {children}
            </div>
          </>
        </body>
      </html>
    </Providers>
  );
}
