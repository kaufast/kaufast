import BlogDetails from "@/components/blog/BlogDetails";
import { allBlogs } from "@/data/blogs";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";

export const metadata = {
  title: "Blog Details || KauFast - Agencia SEO",
  description: "Discover detailed insights on our latest blog.",
};

export default function BlogDetailsPage({ params }) {
  const blogPost = allBlogs.find((post) => post.slug === params.slug);

  if (!blogPost) {
    return <div>Blog not found</div>; // Fallback if slug doesn't match
  }

  return (
    <>
      <Header3 />
      <Breadcumb />
      <BlogDetails blogSlug={params.slug} /> {/* Pass the slug to BlogDetails */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}

// If using SSG or SSR, generate or fetch the blog data based on slugs
export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}
