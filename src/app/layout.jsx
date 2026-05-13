import "./globals.css";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: { default: "letsteach — Practical courses for real careers.", template: "%s | letsteach" },
  description: "Short, focused courses taught by working professionals. Learn design, engineering, data, and more. Pay once, learn forever.",
  keywords: ["online courses india", "learn programming", "ui ux course", "python course", "affordable online learning"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "letsteach — Practical courses for real careers.",
    description: "Short, focused courses taught by working professionals.",
    url: "https://letsteach.com",
    siteName: "letsteach",
    type: "website",
    images: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-zinc-50 text-zinc-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}