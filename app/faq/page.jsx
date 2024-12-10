import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/faq/Breadcumb";
import ContactInfo from "@/components/faq/ContactInfo";
import Faq from "@/components/faq/Faq";

import Footer from "@/components/footers/Footer";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "Faq || KauFast - Agencia SEO ",
};
export default function FaqPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Faq />
      <ContactInfo />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
