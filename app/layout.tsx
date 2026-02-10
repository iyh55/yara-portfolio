import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yara Alshehri | AI Specialist",
  description: "AI Specialist - Building Intelligent Solutions",
  keywords: ["AI", "Machine Learning", "Data Science", "Yara Alshehri"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-800 font-exo antialiased">
        {children}
      </body>
    </html>
  );
}
