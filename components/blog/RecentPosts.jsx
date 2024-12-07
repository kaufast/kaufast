import { recentPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Posts Recientes</h4>
      <div className="sidebar__post-list">
        {recentPosts.map((post) => (
          <div key={post.id} className="sidebar__post-item">
            <div className="sidebar__post-thumb">
              {/* Updated to use slug */}
              <Link scroll={false} href={`/blog-details/${post.slug}`}>
                <Image
                  width={80}
                  height={76}
                  src={post.smallImageUrl}
                  alt={post.title}
                />
              </Link>
            </div>
            <div className="sidebar__post-content">
              <h5 className="title">
                {/* Updated to use slug */}
                <Link scroll={false} href={`/blog-details/${post.slug}`}>
                  {post.title}
                </Link>
              </h5>
              <span className="date">
                <i className="flaticon-time"></i>
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
