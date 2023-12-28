import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/FetchNavbar";
import { Providers } from "../redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Econ Systems",
  description: "Econ Systems",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            <Navbar />
            {children}
          </>
        </body>
      </html>
    </Providers>
  );
}
