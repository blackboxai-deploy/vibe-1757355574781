import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKV Global Business Service LLC - AI-Powered Business Solutions",
  description: "Professional visa, legal, tourist, license, and ticketing services across Hungary, London, and worldwide. AI-powered chat support with smart document management.",
  keywords: "visa services, legal services, business license, tourist services, ticketing, Hungary office, London office, document management",
  authors: [{ name: "SKV Global Business Service LLC" }],
  creator: "SKV Global Business Service LLC",
  publisher: "SKV Global Business Service LLC",
  robots: "index, follow",
  openGraph: {
    title: "SKV Global Business Service LLC",
    description: "AI-Powered Business Solutions Worldwide",
    url: "https://skvbusiness.com",
    siteName: "SKV Global Business Service",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}