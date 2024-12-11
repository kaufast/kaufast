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
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: false,
    });
    wow.init();

    // Dynamically load Iubenda script
    const iubendaScript = document.createElement("script");
    iubendaScript.src = "https://cdn.iubenda.com/iubenda.js";
    iubendaScript.async = true;
    document.body.appendChild(iubendaScript);
  }, [path]);

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

        {/* Add the Privacy Policy Link */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <a
            href="https://www.iubenda.com/privacy-policy/61958056"
            className="iubenda-nostyle iubenda-embed"
            title="Política de Privacidad"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "14px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Política de Privacidad
          </a>
        </div>
      </body>
    </html>
  );
}
