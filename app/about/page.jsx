import Breadcumb from "@/components/about/Breadcumb";
import Contact from "@/components/about/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";
import Footer from "@/components/footers/Footer";
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
      <Contact />
      <Footer />
    </>
  );
}
