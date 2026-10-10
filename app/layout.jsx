import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata = {
  title: "Moon Technology — Business Technology & Automation",
  description:
    "Moon Technology builds custom software, SaaS platforms and business automation systems for growing businesses ready to leave manual work behind.",
  openGraph: {
    title: "Moon Technology — We turn business problems into digital systems.",
    description:
      "Custom software, SaaS and automation for businesses ready to grow.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-text antialiased selection:bg-brass selection:text-[#0A0C0E]">
        {children}
      </body>
    </html>
  );
}
