import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../components/theme-provider";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "じこしょーかい",
  description:
    "じこしょーかい",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          notoSans.className,
          "overflow-y-scroll transition-all ease-in-out",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="theme"
        >
          <LoadingScreen />
          <div className="flex h-[100vh] flex-col">
            <Header className="sticky top-0 z-50 m-1" />
            <div className="mx-8 my-2 flex-grow md:mx-16 lg:mx-32">
              {children}
            </div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
