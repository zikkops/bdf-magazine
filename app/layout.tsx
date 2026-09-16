import type { Metadata, Viewport } from "next";
import { Lato, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-raleway",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "BDF Quarterly Sales Kit",
  description: "BDF Quarterly Magazine media sales kit for the Beirut Duty Free sales team.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
