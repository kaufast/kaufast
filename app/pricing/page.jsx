import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footers/Footer";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/pricing/Breadcumb";
import Faq from "@/components/pricing/Faq";

import Pricing from "@/components/pricing/Pricing";
import React from "react";

export const metadata = {
  title: "Pricing || KauFast - Agencia SEO ",
};
export default function PricingPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Pricing />
      <Faq />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
