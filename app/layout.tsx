import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R-Way Shipping & Storage | Ozone Park, NY",
  description:
    "R-Way Shipping & Storage — reliable shipping and storage solutions in Ozone Park, Queens, New York.",
  keywords: ["shipping", "storage", "Ozone Park", "Queens", "New York", "NYC"],
  openGraph: {
    title: "R-Way Shipping & Storage",
    description:
      "Reliable shipping and storage solutions in Ozone Park, Queens, NY.",
    url: "https://rwayshipping.com",
    siteName: "R-Way Shipping & Storage",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MLBDXL9HR3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLBDXL9HR3');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
