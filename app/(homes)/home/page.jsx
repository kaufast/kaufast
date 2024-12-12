  // app(homes)>home>pages.jsx
import Footer from "@/components/footers/Footer";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home/Faq";
import Hero from "@/components/homes/home/Hero";
import Portfolio from "@/components/homes/home/Portfolio";
import Testimonials from "@/components/homes/common/Testimonials";
import Head from "next/head";

export const metadata = {
  title: "KauFast - Agencia SEO y Marketing Digital en Barcelona",
};
export default function HomePage() {
  return (
    <>
       <Head>
        {/* Page Title */}
        <title>KauFast - Agencia SEO y Diseño Web en Barcelona</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="KauFast es una agencia SEO en Barcelona que ofrece servicios de diseño web y marketing digital para potenciar tu negocio online." 
        />
        
        {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="SEO, diseño web, agencia SEO Barcelona, marketing digital, posicionamiento orgánico" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kaufast.com/" />
        
        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="KauFast - Agencia SEO y Diseño Web" />
        <meta property="og:description" content="Agencia SEO en Barcelona especializada en diseño web y marketing digital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaufast.com/" />
        <meta property="og:image" content="https://www.kaufast.com/assets/img/og-image.jpg" />
        

        {/* Author */}
        <meta name="author" content="KauFast Agencia SEO" />
      </Head>
      <SearchPopup />
      <Header1 />
      <Hero />
      <About />
      <Faq />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}
