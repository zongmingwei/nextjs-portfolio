import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "react-medium-image-zoom/dist/styles.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zongming's place",
  description: "zongming's blog and gallery",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
