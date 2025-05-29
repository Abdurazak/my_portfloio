import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

const gilroy = localFont(
  {
    src:[
      {
        path: "./fonts/gilroy/Gilroy-Light.ttf",
        weight:'300',
        style:"normal",
      },
      {
        path: "./fonts/gilroy/Gilroy-Regular.ttf",
        weight:'400',
        style:"normal",
      },
      {
        path: "./fonts/gilroy/Gilroy-Medium.ttf",
        weight:'500',
        style:"normal",
      },
      {
        path: "./fonts/gilroy/Gilroy-Bold.ttf",
        weight:'700',
        style:"normal",
      },
      {
        path: "./fonts/gilroy/Gilroy-Heavy.ttf",
        weight:'800',
        style:"normal",
      }
    ],
    variable: "--font-gilroy",
  }
);


export const metadata: Metadata = {
  title: "Abdurazak Abrar",
  description: "A developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
