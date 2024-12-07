import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "@/components/portfolio/Breadcumb2";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import { allPortfolio } from "@/data/portfolio";

export const metadata = {
  title: "Project Details || KauFast - Agencia SEO ",
};

// For Static Site Generation (SSG) with slugs
// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     slug: elm.slug,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <ProjectDetails portfolioSlug={params.slug} />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
