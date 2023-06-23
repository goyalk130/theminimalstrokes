import Provider from "@/components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import SigninButton from "@/components/SigninButton";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
      
        <Provider><Navbar/>
        {children}</Provider>
      </body>
    </html>
  );
}
