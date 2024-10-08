// from radix themes 
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Theme } from '@radix-ui/themes';
import Header from "./components/navigation/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solo-Leveling System",
  description: "Generated by create next app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
        <Theme>
        <Header />
          {children}
        </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
