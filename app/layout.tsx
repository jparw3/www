import React from  "react";
import "./global.scss";
import {Metadata} from "next";
import {INDEX_OG_PATH} from "@/app/lib/constants";
import {Analytics} from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jxck.bio"),
  title: {
    template: "%s - Jack Willars",
    default: "Jack Willars — Software Developer",
  },
  description: "Crafting digital experiences with code.",
  openGraph: {
    url: "https://jxck.bio",
    images: [INDEX_OG_PATH]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jparw3",
    images: [INDEX_OG_PATH]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Analytics/>
      {children}
      </body>
    </html>
  );
}
