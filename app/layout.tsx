import type { Metadata } from "next";
import "./globals.css";

import { inter, roboto_mono } from "./font";

export const metadata: Metadata = {
  title: "CineScope Dashboard",
  description: "Your gateway to cinematic insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.variable} ${roboto_mono.variable} antialiased font-inter`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}