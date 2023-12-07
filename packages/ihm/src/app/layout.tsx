import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online payment",
  description: "Online payment workflow",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} bg-zoro-bg bg-no-repeat bg-cover bg-center backdrop-blur-md`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
