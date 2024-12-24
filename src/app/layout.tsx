import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import { IChildren } from "@/interfaces/interfaces";
import { Metadata } from "next";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://heba-syijari2.vercel.app/"),
  title: {
    default: "My Portfolio",
    template: "%s | My Portfolio",
  },
  description:
    "Software Engineer, always looking for new challenges and knowledge, I have the ability to quickly learn new stuff. I code in JavaScript, especially ReactJS.",
  icons: "/logo.png",
  keywords: ["cd", "cdc", "cdcdc"],
  openGraph: {
    title: "My Portfolio",
    description:
      "Software Engineer, always looking for new challenges and knowledge, I have the ability to quickly learn new stuff. I code in JavaScript, especially ReactJS.",
    url: "https://heba-syijari2.vercel.app/",
    images: [
      {
        url: "/images/my-portfolio.jpg",
        width: 1200,
        height: 630,
        href: "https://heba-syijari2.vercel.app/images/my-portfolio.jpg",
        alt: "Open Graph image",
      },
    ],
    type: "website",
    emails: "symaherhiba@gmail.com",
  },
};
export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <div id="my-modal" />
      </body>
    </html>
  );
}
