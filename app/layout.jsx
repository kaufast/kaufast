"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import { Poppins } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";

// Google Fonts
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

  return (
    <html lang="es">
      <head>
        {/* Cookie-Script */}
        <script
          type="text/javascript"
          charSet="UTF-8"
          src="https://cdn.cookie-script.com/s/041f0acc3eb9ea6bcb191f2b4322dcf9.js"
        ></script>
      </head>
      <body className={`body ${poppins.variable}`}>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
