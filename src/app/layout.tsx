import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata: Metadata = {
  title: "Creation Rights - Empowering Digital Creators",
  description: "A platform dedicated to protecting and empowering digital creators' rights in the modern world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/@github/mona-sans@1.0.0/index.css"
            rel="stylesheet"
          />
          <link rel="icon" href="/creation-rights logo icon white.svg" type="image/svg+xml" />
        </head>
      <body
        className="antialiased w-full"
        style={{ fontFamily: 'Mona Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif' }}
      >
        <ThemeProvider>
          <Navigation />
          <main className="pt-16 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
