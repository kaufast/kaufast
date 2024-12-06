// app<(blog)>blog>page.jsx
import BlogList1 from "@/components/blog/BlogList1";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import { allBlogs } from "@/data/blogs";

export async function getServerSideProps() {
  return {
    props: {
      blogs: allBlogs,
    },
  };
}
export const metadata = {
  title: "Blog 1 || KauFast - Agencia SEO ",
  description: "Discover the latest blogs about SEO, Marketing, and more.",

};
export default function BlogPage({ blogs }) {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <BlogList1 blogs={blogs}/>
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
