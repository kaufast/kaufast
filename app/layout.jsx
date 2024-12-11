"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import { Poppins } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Bootstrap functionality can be accessed here
  });
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--body-font",
});

const GA_MEASUREMENT_ID = "G-R95SZLG0G7"; // Your GA4 Measurement ID

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      const url = `${window.location.pathname}${window.location.search}`;
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    // Initialize Google Analytics
    const initializeGA = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };

    initializeGA();
    handleRouteChange();
  }, [pathname, searchParams]);

  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
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
        {/* Cookie-Script */}
        <script
          type="text/javascript"
          charSet="UTF-8"
          src="https://cdn.cookie-script.com/s/041f0acc3eb9ea6bcb191f2b4322dcf9.js"
        ></script>
      </head>
      <body className={`body ${poppins.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJHK9DQ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
