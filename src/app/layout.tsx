import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const ebGaramond = EB_Garamond({
  subsets: ["latin"],      // or ["latin-ext"] if needed
  weight: ["400", "700"],  // specify the weights you need
  display: "swap",         // optional
});

export const metadata: Metadata = {
  title: "Solana Casino",
  description: "",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
