import Footer8 from "@/components/footers/Footer8";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home/Faq";
import Hero from "@/components/homes/home/Hero";
import Portfolio from "@/components/homes/home/Portfolio";
import Testimonials from "@/components/homes/common/Testimonials";
export const metadata = {
  title: "Home 1 || KauFast - Agencia SEO ",
};
export default function HomePage() {
  return (
    <>
      <SearchPopup />
      <Header1 />
      <Hero />
      <About />
      <Faq />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <Footer8 />
    </>
  );
}
