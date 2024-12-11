"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import { Unbounded, Poppins } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Bootstrap functionality can be accessed here
  });
}

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--title-font",
});

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
        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-NJHK9DQ4'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJHK9DQ4');
            `,
          }}
        />
        {/* Add Cookie-Script CMP */}
        <script
          type="text/javascript"
          charSet="UTF-8"
          src="https://cdn.cookie-script.com/s/041f0acc3eb9ea6bcb191f2b4322dcf9.js"
        ></script>
      </head>
      <body className={`body ${poppins.variable} ${unbounded.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJHK9DQ4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
