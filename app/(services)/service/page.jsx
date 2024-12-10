import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footers/Footer";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";

import Video from "@/components/service/Video";
export const metadata = {
  title: "Service 1 || KauFast - Agencia SEO ",
};

export default function ServicePage1() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Features1 />
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
