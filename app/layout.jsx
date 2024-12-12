"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import { Unbounded, Poppins } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google' 


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Module is imported, you can access any exported functionality if
  });
}
// wow js

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--title-font",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  const path = usePathname();
  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [path]);
  //useEffect(() => {

  //wow?.sync();
  //}, [path]);
  return (
    <html lang="es">
            <GoogleTagManager gtmId="GTM-NJHK9DQ4" />
      <body className={`body  ${poppins.variable} ${unbounded.variable}`}>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJHK9DQ4"
        height="0" 
        width="0" 
        style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
        <ParallaxProvider>

          {children}

          </ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
        <script type="text/javascript" charSet="UTF-8" src="//cdn.cookie-script.com/s/041f0acc3eb9ea6bcb191f2b4322dcf9.js"></script>
      </body>
    </html>
  );
}