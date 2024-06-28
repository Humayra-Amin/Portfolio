import { Inter } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/pages/AOSInitializer";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/profile1.png" />
        <meta property="og:image" content="/profile1.png" />
      </Head> */}
      <body className={inter.className}>
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
