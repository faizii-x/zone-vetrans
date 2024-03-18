// import { Inter } from "next/font/google";
// import "./globals.css";

// // const inter = Inter({ subsets: ["latin"] });
// const { Inter } = require("next/font/google");

// export const metadata = {
//   title: "Vetrans",
//   description: "Construction Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import { GoogleFonts } from "next-google-fonts";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      <Component {...pageProps} className={inter.className} />
    </>
  );
}

export default MyApp;