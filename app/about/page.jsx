import Awards from "@/components/about/Awards";
import Breadcumb from "@/components/about/Breadcumb";
import Contact from "@/components/about/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";

import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "About || KauFast - Agencia SEO ",
};

export default function AboutPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Facts />
      <Features />
      <Awards />
      <Contact />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
