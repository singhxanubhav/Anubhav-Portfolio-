import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";

const inter = Raleway({ 
  subsets: ["latin"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Anubhav Singh",
  description: "Anubhav Singh, Full Stack Developer, BEU Undergraduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-[100%]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          <div>{children}</div>
          <Footer />
          <BackgroundBeams />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
