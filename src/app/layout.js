import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { QueryClientProvider } from "@/provider/query-client";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "CricBex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <QueryClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
