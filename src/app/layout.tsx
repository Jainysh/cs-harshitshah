import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional CS Firm | Precision & Compliance",
  description: "Expert SEBI and Corporate Law Consultancy in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.png" />
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
